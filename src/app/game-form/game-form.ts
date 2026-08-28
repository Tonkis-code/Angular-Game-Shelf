import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-game-form',
  styleUrl: './game-form.css',
  templateUrl: './game-form.html',
})
export class GameForm {
  title = '';
  status = 'Playing';
  rating: number | null = null;

  formSent = output<{ title: string; status: string; rating: number }>();

  addGame() {
    if (this.rating === null) {
      return;
    }
    this.formSent.emit({
      title: this.title,
      status: this.status,
      rating: this.rating,
    });

    this.title = '';
    this.status = 'Playing';
    this.rating = null;
  }
}
