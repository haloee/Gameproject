import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() board!: string[][];
  @Output() cellClick: EventEmitter<any> = new EventEmitter<any>();
  
}
