import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  constructor() { }

  @Input() ctaText:string = 'ctatext';
  @Input() ctaMsg:string = 'ctamsg';
  @Input() btnText:string = 'btntext';

  ngOnInit(): void {
  }

}
