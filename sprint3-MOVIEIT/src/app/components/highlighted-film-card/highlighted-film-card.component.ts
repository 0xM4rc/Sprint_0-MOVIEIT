import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-highlighted-film-card',
  standalone: true,
  imports: [],
  templateUrl: './highlighted-film-card.component.html',
  styleUrl: './highlighted-film-card.component.css'
})
export class HighlightedFilmCardComponent {
  @Input() id: string | number = 0;
  @Input() fileUrl: string = '';
  @Input() time: number = 0;

  constructor() { }
}
