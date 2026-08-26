import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-game-card',
  styleUrl: './game-card.css',
  templateUrl: './game-card.html',
})
export class GameCard {
  title = input<string>();
  status = input<string>();
  rating = input<number>();
}
