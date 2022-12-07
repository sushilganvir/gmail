import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailsService {
  mails = [
    {
      id: 1,
      sent: 'google 1',
      heading:'simply dummy text',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      date: 'nov 2',
      poster: 'https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png',
    },
    {
      id: 2,
      sent: 'google 2',
      heading:'popular belief',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      date: 'nov 3',
      poster: 'https://www.typingpal.com/images/1/3/a/8/4/13a845e178cb05ecc149ffc850ad9a6eac19f85d-lorem-ipsum.png',
    },
    {
      id: 3,
      sent: 'google 3',
      heading:'long established fact',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      date: 'nov 4',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQy62aSkPe4Z1svymRE_TbXLNJDVhau7yTw5XquQ_BvhJX0J_3inAzlQbz0Ppbse0ReGs&usqp=CAU',
    },
  ];

  constructor() {}
}
