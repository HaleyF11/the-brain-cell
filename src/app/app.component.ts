import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PuzzleBoardComponent } from './puzzle-board/puzzle-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PuzzleBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'the-brain-cell';
}
