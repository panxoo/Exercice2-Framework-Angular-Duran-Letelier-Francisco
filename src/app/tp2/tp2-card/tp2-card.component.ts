import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tp2-card',
  templateUrl: './tp2-card.component.html',
  styleUrls: ['./tp2-card.component.scss']
})
export class Tp2CardComponent {
  @Input() id: number = 0
  @Input() nom: string = ''
  @Input() prenom: string = ''
  @Input() statut: string = ''


  onChangeStatut(newStatut: string) {
    this.statut = newStatut
  }
}
