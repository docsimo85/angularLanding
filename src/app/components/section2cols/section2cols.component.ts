import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2cols',
  templateUrl: './section2cols.component.html',
  styleUrls: ['./section2cols.component.scss']
})
export class Section2colsComponent implements OnInit {

  constructor() { }

  @Input() sectionTitle:string = 'Title not set';
  @Input() titlecol1:string = 'Title1 not set';
  @Input() titlecol2:string = 'Title2 not set';
  @Input() textcol1:string = 'Textcol1 not set';
  @Input() textcol2:string = 'Textcol2 not set';

  ngOnInit(): void {
  }

}
