import { Component } from '@angular/core';
import { GamesService } from '../game-options.service';

@Component({
  selector: 'app-puzzle-board',
  standalone: true,
  imports: [],
  templateUrl: './puzzle-board.component.html',
  styleUrl: './puzzle-board.component.scss',
})
export class PuzzleBoardComponent {
  constructor(private gamesService: GamesService) {
    this.gamesService.createGameBoard();
    this.gamesService.shuffleGameBoard(this.gamesService.gameBoard);
  }

  counter = 0;

  get src1() {
    return this.gamesService.gameBoard[0].url;
  }
  get src2() {
    return this.gamesService.gameBoard[1].url;
  }
  get src3() {
    return this.gamesService.gameBoard[2].url;
  }
  get src4() {
    return this.gamesService.gameBoard[3].url;
  }

  checkWinner(id: string) {
    if (this.gamesService.gameBoard[+id].winner) {
      this.counter++;
      this.gamesService.resetGameBoard();
      this.gamesService.shuffleGameBoard(this.gamesService.gameBoard);
    } else {
      this.onReset();
      this.counter = 0;
    }
  }

  onReset() {
    this.gamesService.resetGameBoard();
    this.counter = 0;
    this.gamesService.shuffleGameBoard(this.gamesService.gameBoard);
  }
}
