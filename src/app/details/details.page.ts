import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: string | null = null;
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService : FirebaseService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id) {
        this.movieService.getMovieById(this.id).subscribe(data => {
          this.movie = data;
          // console.log(this.movie);
        });
      }
    });
  }

}
