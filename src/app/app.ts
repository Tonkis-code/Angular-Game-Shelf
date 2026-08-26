import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameList } from './game-list/game-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GameList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-game-shelf');
}
