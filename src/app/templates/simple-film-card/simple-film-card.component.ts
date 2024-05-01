import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-simple-film-card',
  templateUrl: './simple-film-card.component.html',
  styleUrl: './simple-film-card.component.css'
})
export class SimpleFilmCardComponent {
  @Input() id: string | number = 0;
  @Input() fileUrl: string = '';
  @Input() time: number = 0;
}
