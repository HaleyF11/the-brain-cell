import { Injectable } from '@angular/core';

interface PieceInfo {
  url: string;
  winner: boolean;
}

@Injectable({ providedIn: 'root' })
export class GamesService {
  gameBoard: Array<PieceInfo> = [];
  winner: string = '';
  private gameOptions = [
    {
      // Flower (unfilled) nocircle
      id: 1,
      images: [
        {
          url: 'flower-filled-circle.png',
          winner: false,
        },
        {
          url: 'leaf-filled-nocircle.png',
          winner: false,
        },
        {
          url: 'leaf-filled-circle.png',
          winner: false,
        },
        {
          url: 'flower-unfilled-nocircle.png',
          winner: true,
        },
      ],
    },
    {
      // Leaf filled (nocircle)
      id: 2,
      images: [
        {
          url: 'flower-unfilled-circle.png',
          winner: false,
        },
        {
          url: 'leaf-filled-nocircle.png',
          winner: true,
        },
        {
          url: 'leaf-filled-circle.png',
          winner: false,
        },
        {
          url: 'flower-filled-circle.png',
          winner: false,
        },
      ],
    },
    {
      // (flower) filled circle
      id: 3,
      images: [
        {
          url: 'flower-filled-circle.png',
          winner: true,
        },
        {
          url: 'leaf-filled-nocircle.png',
          winner: false,
        },
        {
          url: 'leaf-unfilled-circle.png',
          winner: false,
        },
        {
          url: 'leaf-unfilled-nocircle.png',
          winner: false,
        },
      ],
    },
    {
      // Leaf (filled) circle
      id: 4,
      images: [
        {
          url: 'leaf-filled-circle.png',
          winner: true,
        },
        {
          url: 'leaf-unfilled-nocircle.png',
          winner: false,
        },
        {
          url: 'flower-unfilled-nocircle.png',
          winner: false,
        },
        {
          url: 'flower-unfilled-circle.png',
          winner: false,
        },
      ],
    },
    {
      // flower filled (circle)
      id: 5,
      images: [
        {
          url: 'flower-filled-circle.png',
          winner: true,
        },
        {
          url: 'leaf-unfilled-nocircle.png',
          winner: false,
        },
        {
          url: 'leaf-filled-nocircle.png',
          winner: false,
        },
        {
          url: 'flower-unfilled-nocircle.png',
          winner: false,
        },
      ],
    },
    {
      // (leaf) filled circle
      id: 5,
      images: [
        {
          url: 'leaf-filled-nocircle.png',
          winner: true,
        },
        {
          url: 'flower-unfilled-nocircle.png',
          winner: false,
        },
        {
          url: 'flower-filled-circle.png',
          winner: false,
        },
        {
          url: 'flower-unfilled-circle.png',
          winner: false,
        },
      ],
    },
  ];

  createGameBoard() {
    const gameOptionSelector = Math.floor(
      Math.random() * this.gameOptions.length
    );
    for (let image of this.gameOptions[gameOptionSelector].images) {
      this.gameBoard.push(image);
    }
    return this.gameBoard;
  }

  shuffleGameBoard(array: Array<PieceInfo>) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  resetGameBoard() {
    this.gameBoard = [];
    const gameOptionSelector = Math.floor(
      Math.random() * this.gameOptions.length
    );
    for (let image of this.gameOptions[gameOptionSelector].images) {
      this.gameBoard.push(image);
    }
    return this.gameBoard;
  }
}
