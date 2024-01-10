import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-tp1-row]',
  templateUrl: './tp1-row.component.html',
  styleUrls: ['./tp1-row.component.scss']
})
export class Tp1RowComponent implements OnInit {
  @Input() id: number = 0
  @Input() Username: string = "username"
  @Input() AdresseMail: string = "Email"


  ngOnInit(): void {
    if (this.Username == 'Robert')
      this.Username = 'Pablo'
  }
}
