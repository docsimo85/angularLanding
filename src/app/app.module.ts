import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeromsgComponent } from './components/heromsg/heromsg.component';
import { Section2colsComponent } from './components/section2cols/section2cols.component';
import { Section3colsComponent } from './components/section3cols/section3cols.component';
import { Section3blockComponent } from './components/section3block/section3block.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeromsgComponent,
    Section2colsComponent,
    Section3colsComponent,
    Section3blockComponent,
    CtaComponent,
    FooterComponent,
    HomeComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
