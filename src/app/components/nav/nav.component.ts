import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    public darkModeService: DarkModeService
  ) { }

   @Input() nome:string = '';
   @Output() trigger = new EventEmitter<string>();

   buttonClicked($event: any){
    //this.trigger.emit('action button clicked');
    this.darkModeService.darkMode = !this.darkModeService.darkMode
   }

  ngOnInit(): void {
  }

}
