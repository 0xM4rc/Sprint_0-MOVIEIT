import {Component, Input} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
@Component({
  selector: 'app-simple-film-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './simple-film-card.component.html',
  styleUrl: './simple-film-card.component.css'
})
export class SimpleFilmCardComponent {
  @Input() id: string | number = 0;
  @Input() fileUrl: string = '';
  @Input() time: number = 0;
}
