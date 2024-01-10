import { Component } from '@angular/core';

@Component({
  selector: 'app-tp3-debut',
  templateUrl: './tp3-debut.component.html',
  styleUrls: ['./tp3-debut.component.scss']
})
export class Tp3DebutComponent {

  categories: categorie[] = []

  constructor() {
    this.categories.push({
      name: 'Haut',
      types: ['Pull', 'Tee-shirt', 'Manteau', 'Sweat']
    })

    this.categories.push({
      name: 'Bas',
      types: ['Jean', 'Robe', 'Jupe', 'Jogging', 'Chino']
    })

    this.categories.push({
      name: 'Chaussures',
      types: ['Basket', 'Ville', 'Espadrille', 'Mocassin']
    })

  }

}

interface categorie {
  name: string
  types: string[]
}
