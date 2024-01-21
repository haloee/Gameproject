// src/app/board.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  checkForWinner(cells: string[]): string | null {
    // Implement winning logic here
    // Return the winner ('X' or 'O') or null if no winner
    return null;
  }

  checkForDraw(cells: string[]): boolean {
    // Implement draw logic here
    // Return true if the game is a draw, false otherwise
    return false;
  }
}
