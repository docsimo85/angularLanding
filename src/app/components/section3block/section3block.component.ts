import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3block',
  templateUrl: './section3block.component.html',
  styleUrls: ['./section3block.component.scss']
})
export class Section3blockComponent implements OnInit {

  @Input() subtitle:string = 'subtitle';
  @Input() title:string = 'title';
  @Input() text:string = 'text';
  @Input() btnText:string = 'btnText';
  @Input() link:string = 'https://www.google.it';

  constructor() { }

  ngOnInit(): void {
  }

}
