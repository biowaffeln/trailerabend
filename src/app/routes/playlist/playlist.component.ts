import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Movie } from '../../models/movie.model';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { combineLatest } from 'rxjs/observable/combineLatest';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<void>();
  
  links: SafeUrl[];
  currentLink: SafeUrl;
  linkIndex$ = new BehaviorSubject<number>(0);

  constructor(private db: FirestoreService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    
    const links$ = this.db.col$<Movie>('/movies').pipe(
      map(movies => {
        return movies.map(movie => {
          return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl(movie.trailerlink))
        });
      })
    );
    
    const index$ = this.linkIndex$.asObservable();

    combineLatest(links$, index$).pipe(
      takeUntil(this.onDestroy$)
    )
    .subscribe(([links, index]) => {
      this.links = links;
      this.currentLink = links[index];
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  get linkIndex() {
    return this.linkIndex$.getValue();
  }

  set linkIndex(value: number) {
    this.linkIndex$.next(value);
  }

  changeIndex(n: number) {
    this.linkIndex = this.linkIndex + n;
  }

}

const embedUrl = (url: string): string => {
  const baseUrl = 'https://www.youtube.com/embed/';
  const id = parseId(url);
  return id ? baseUrl + id : '';
}

const parseId = (url: string): string | false => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length == 11) ? match[7] : false;
}