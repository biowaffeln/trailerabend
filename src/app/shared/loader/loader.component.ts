import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { LoaderType } from './loader.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() data: any;
  @Input() type = LoaderType.BAR;
  @ContentChild(TemplateRef) contentRef;
  
  constructor() { }

  ngOnInit() {
  }

}
