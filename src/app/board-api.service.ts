
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardApiService {
  private apiUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) { }

  saveBoard(boardName: string, board: string[][]): Observable<any> {
    const data = {
      name: boardName,
      board: board
    };
    return this.http.post(`${this.apiUrl}/save-board`, data);
  }
}
