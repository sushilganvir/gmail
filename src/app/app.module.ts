import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailComponent } from './components/detail/detail.component';
import { EmailListComponent } from './components/email-list/email-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    EmailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
