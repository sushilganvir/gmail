import { Component } from '@angular/core';
import { MailsService } from 'src/app/mails.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent {

  data:any = []

  constructor(private mails: MailsService){}

  ngOnInit() :void {
     this.mails.mails.map(emaillist => {
      this.data.push(emaillist)
     })
  }

}
