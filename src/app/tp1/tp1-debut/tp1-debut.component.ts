import { Component } from '@angular/core';

@Component({
  selector: 'app-tp1-debut',
  templateUrl: './tp1-debut.component.html',
  styleUrls: ['./tp1-debut.component.scss']
})
export class Tp1DebutComponent {

  userList: user[] = []

  constructor() {
    this.userList.push({
      id: 1,
      Username: 'Francisco',
      AdresseMail: 'francisco@h.com'
    })

    this.userList.push({
      id: 2,
      Username: 'Pedro',
      AdresseMail: 'Pedro@h.com'
    })

    this.userList.push({
      id: 3,
      Username: 'Robert',
      AdresseMail: 'Robert@h.com'
    })

    this.userList.push({
      id: 4,
      Username: 'Carl',
      AdresseMail: 'Carl@h.com'
    })
  }


}


interface user {
  id: number
  Username: string
  AdresseMail: string
}