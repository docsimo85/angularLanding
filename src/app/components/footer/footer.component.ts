import { Component, OnInit, Input } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public darkModeService: DarkModeService
  ) { }

  @Input() nome:string = '';

  ngOnInit(): void {
  }

}
