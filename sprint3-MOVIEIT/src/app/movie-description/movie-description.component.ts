import { Component} from '@angular/core';

@Component({
  selector: 'app-movie-description',
  standalone: true,
  imports: [],
  templateUrl: './movie-description.component.html',
  styleUrl: './movie-description.component.css'
})
export class MovieDescriptionComponent {
  constructor() {
  }
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
