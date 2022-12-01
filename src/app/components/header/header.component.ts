import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss' , './mobile.component.scss']
})
export class HeaderComponent {

  submenu:boolean = false;

  toggle(){
    this.submenu = !this.submenu
  }

}
