import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailsService } from 'src/app/mails.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  id: any;
  maildetail:any;


  constructor(private active:ActivatedRoute ,private mail:MailsService){}

  ngOnInit():void{
    this.id = this.active.snapshot.paramMap.get('id')
    this.maildetail = this.mail.mails.find(data => data.id == this.id)
  }

}
