
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save-board',
  templateUrl: './save-board.component.html',
  styleUrls: ['./save-board.component.css']
})
export class SaveBoardComponent {
  @Output() saveBoard: EventEmitter<string> = new EventEmitter<string>();

  boardName: string = '';

  onSave(): void {
    if (this.boardName.trim() !== '') {
      this.saveBoard.emit(this.boardName);
      this.boardName = ''; 
    }
  }
}
