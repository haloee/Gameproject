import { TestBed } from '@angular/core/testing';

import { SavedGamesApiService } from './saved-games-api.service';

describe('SavedGamesApiService', () => {
  let service: SavedGamesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedGamesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
