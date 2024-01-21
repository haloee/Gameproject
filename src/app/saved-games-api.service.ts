// saved-games-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedGamesApiService {
  private apiUrl = 'http://localhost:5000'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getSavedGames(filterTerm?: string): Observable<any> {
    const params = filterTerm ? new HttpParams().set('filter', filterTerm) : new HttpParams();
    return this.http.get(`${this.apiUrl}/saved-games`, { params });
  }

  deleteSavedGame(gameId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/saved-games/${gameId}`);
  }

  loadSavedGame(gameId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/saved-games/${gameId}`);
  }
}
