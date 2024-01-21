// saved-games.component.ts
import { Component, OnInit } from '@angular/core';
import { SavedGamesApiService } from '../saved-games-api.service';

@Component({
  selector: 'app-saved-games',
  templateUrl: './saved-games.component.html',
  styleUrls: ['./saved-games.component.css']
})
export class SavedGamesComponent implements OnInit {
  savedGames: any[] = [];
  filterTerm: string = '';

  constructor(private savedGamesApiService: SavedGamesApiService) {}

  ngOnInit(): void {
    this.loadSavedGames();
  }

  loadSavedGames(): void {
    this.savedGamesApiService.getSavedGames(this.filterTerm)
      .subscribe(
        data => this.savedGames = data,
        error => console.error('Error loading saved games:', error)
      );
  }

  deleteSavedGame(gameId: string): void {
    this.savedGamesApiService.deleteSavedGame(gameId)
      .subscribe(
        () => {
          this.loadSavedGames();
        },
        error => console.error('Error deleting saved game:', error)
      );
  }

  loadGame(gameId: string): void {
    this.savedGamesApiService.loadSavedGame(gameId)
      .subscribe(
        data => {
          // Navigate to the game page with the loaded board state
          // Example: this.router.navigate(['/game', { board: data.board }]);
        },
        error => console.error('Error loading saved game:', error)
      );
  }

  applyFilter(): void {
    this.loadSavedGames();
  }
}
