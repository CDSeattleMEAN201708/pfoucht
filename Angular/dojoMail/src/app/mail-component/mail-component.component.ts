import { Component, OnInit } from '@angular/core';

interface UserInterface {
  name: string,
  importance: boolean,
  subject: string,
  content: string
}

@Component({
  selector: 'app-mail-component',
  templateUrl: './mail-component.component.html',
  styleUrls: ['./mail-component.component.css']
})
export class MailComponentComponent implements OnInit {e
  users: UserInterface[] = [
    {name: "Bill@Gates.com", importance: true, subject: "New Windows", content: 'Windows XI will launch in 2100'},
    {name: "ada@love.com", importance: false, subject: "Movies", content: 'I do not watch movies'},
    {name: "john@carmac.com", importance: true, subject: "Dinner tonight", content: 'Want to get dinner?'},
    {name: "gabe@new.com", importance: false, subject: "Costco outing", content: 'I love costco.'}
  ]
  constructor() { }

  ngOnInit(
  ) {
  }

}
