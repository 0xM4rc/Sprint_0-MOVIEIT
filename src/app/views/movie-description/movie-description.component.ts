import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrl: './movie-description.component.css'
})
export class MovieDescriptionComponent implements OnInit{
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
