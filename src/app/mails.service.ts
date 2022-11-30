import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailsService {
  mails = [
    {
      id: 1,
      sent: 'google 1',
      content: 'this is content 1',
      date: 'nov 2',
    },
    { id: 2, sent: 'google 2', content: 'this is content 2', date: 'nov 3' },
    {
      id: 3,
      sent: 'google 3',
      content: 'this is content 3',
      date: 'nov 4',
    },
  ];

  constructor() {}
}
