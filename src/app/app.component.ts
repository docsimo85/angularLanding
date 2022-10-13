import { Component } from '@angular/core';
import { DarkModeService } from './service/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public darkModeService: DarkModeService
  ){

  }

  title = 'Corporate Name';

  log(event:any) {
    console.log('ricevuto', event);
    const randomNumber = Math.floor(Math.random()*100)
    //this.title = 'Pippo ' + randomNumber
  }
}
