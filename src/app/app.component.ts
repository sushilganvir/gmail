import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gmail';

  submenu:boolean = false;

  toggle(){
    this.submenu = !this.submenu
  }
}
