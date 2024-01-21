// src/app/board.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  checkForWinner(cells: string[]): string | null {

    return null;
  }

  checkForDraw(cells: string[]): boolean {

    return false;
  }
}
