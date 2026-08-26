import { Component } from '@angular/core';
import { GameCard } from '../game-card/game-card';

@Component({
  imports: [GameCard],
  selector: 'app-game-list',
  styleUrl: './game-list.css',
  templateUrl: './game-list.html',
})
export class GameList {
  games = [
    {
      title: 'Ghost of Tsushima',
      status: 'Playing',
      rating: 10
    },
    {
      title: 'Sekiro: Shadows Die Twice',
      status: 'Not Owned',
      rating: 9
    }
  ];
}
