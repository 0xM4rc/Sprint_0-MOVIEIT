import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css'
})
export class FilmCardComponent {
  @Input() id: string | number = 0;
  @Input() fileUrl: string = '';
  @Input() time: number = 0;

  constructor() { }
}
