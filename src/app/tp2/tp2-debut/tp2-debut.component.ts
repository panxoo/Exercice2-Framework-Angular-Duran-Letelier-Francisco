import { Component } from '@angular/core';

@Component({
  selector: 'app-tp2-debut',
  templateUrl: './tp2-debut.component.html',
  styleUrls: ['./tp2-debut.component.scss']
})
export class Tp2DebutComponent {

  userList: user[] = []

  constructor() {
    this.userList.push({
      id: 1,
      prenom: 'Francisco',
      nom: 'Duran',
      statut: 'non-déterminé'
    })

    this.userList.push({
      id: 2,
      prenom: 'Pedro',
      nom: 'Letelier',
      statut: 'non-déterminé'
    })

    this.userList.push({
      id: 3,
      prenom: 'Robert',
      nom: 'Sylva',
      statut: 'non-déterminé'
    })

    this.userList.push({
      id: 4,
      prenom: 'Carl',
      nom: 'Marc',
      statut: 'non-déterminé'
    })
  }

}

interface user {
  id: number
  nom: string
  prenom: string
  statut: string
}
