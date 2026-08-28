import { Component } from '@angular/core';
import { GameCard } from '../game-card/game-card';
import { GameForm } from '../game-form/game-form';

@Component({
  imports: [GameCard, GameForm],
  selector: 'app-game-list',
  styleUrl: './game-list.css',
  templateUrl: './game-list.html',
})
export class GameList {
  games = [
    {
      title: 'Ghost of Tsushima',
      status: 'Playing',
      rating: 10,
    },
    {
      title: 'Sekiro: Shadows Die Twice',
      status: 'Wishlist',
      rating: 9,
    },
  ];

  addGame(game: { title: string; status: string; rating: number }) {
    this.games.push(game);

    localStorage.setItem('games', JSON.stringify(this.games));
  }

  constructor() {
    const savedGames = localStorage.getItem('games');

    if (savedGames == null) {
      return;
    } else {
      this.games = JSON.parse(savedGames);
    }
  }
}
