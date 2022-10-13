import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3cols',
  templateUrl: './section3cols.component.html',
  styleUrls: ['./section3cols.component.scss']
})
export class Section3colsComponent implements OnInit {

  constructor() { }
  @Input() titolo:string = 'titolo not set'

  ngOnInit(): void {
  }

}
