import { Component, OnInit } from '@angular/core';
import { BoardApiService } from '../board-api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  currentPlayer: string = 'X';
  board: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  winner: string | null = null;
  
  constructor(private boardApiService: BoardApiService) {}

  saveBoard(boardName: string): void {
    if (!this.isBoardEmpty()) {
      this.boardApiService.saveBoard(boardName, this.board)
        .subscribe(
          response => console.log('Board saved successfully:', response),
          error => console.error('Error saving board:', error)
        );
    }
  }
  isBoardEmpty(): boolean {
    // Check if the board is empty
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] !== '') {
          return false; // Board is not empty
        }
      }
    }
    return true; // Board is empty
  }
  
  ngOnInit(): void {
    this.currentPlayer = 'X';
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.winner = null;
  }

  handleCellClick(event: any): void {
    if (!this.winner) {
      const { row, col } = event;
      if (!this.board[row][col]) {
        this.board[row][col] = this.currentPlayer;
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): void {
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2] &&
        this.board[i][0] !== ''
      ) {
        this.winner = this.board[i][0];
        return;
      }
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i] &&
        this.board[0][i] !== ''
      ) {
        this.winner = this.board[0][i];
        return;
      }
    }

    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] &&
      this.board[0][0] !== ''
    ) {
      this.winner = this.board[0][0];
      return;
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0] &&
      this.board[0][2] !== ''
    ) {
      this.winner = this.board[0][2];
      return;
    }

    if (this.isBoardFull()) {
      this.winner = 'draw';
    }
  }

  isBoardFull(): boolean {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  }

  resetGame(): void {
    this.currentPlayer = 'X';
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.winner = null;
  }

  getGameResultMessage(): string {
    if (this.winner === 'draw') {
      return 'It\'s a draw!';
    } else if (this.winner) {
      return `Player ${this.winner} wins!`;
    } else {
      return `Player ${this.currentPlayer}'s turn`;
    }
  }
}
