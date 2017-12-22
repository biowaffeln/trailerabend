import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() data: any;
  @ContentChild(TemplateRef) contentRef;
  
  constructor() { }

  ngOnInit() {
  }

}
