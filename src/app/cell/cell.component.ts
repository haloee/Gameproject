import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() value: string = '';
  @Output() cellClick: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    if (this.value === '') {
      this.cellClick.emit();
    }
  }
}
