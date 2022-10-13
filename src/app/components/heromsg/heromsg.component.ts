import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-heromsg',
  templateUrl: './heromsg.component.html',
  styleUrls: ['./heromsg.component.scss']
})
export class HeromsgComponent implements OnInit {

  constructor(
    public darkModeService: DarkModeService
    ) { }
  @Input() smallText: string = '';
  @Input() bigText:string = '';
  @Input() subText:string = '';
  @Input() btnsubText:string = '';
  @Input() image:string = 'https://via.placeholder.com/400x60.png'

  ngOnInit(): void {
  }

}
