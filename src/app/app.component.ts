import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'untitled3';

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    /* 
    console.log(this.authenticationService);
    this.authenticationService.user$.subscribe((user) => {
      if (user) {
        this.authenticationService.currentUserSignedIn.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authenticationService.currentUserSignedIn.set(null);
      }
      console.log(this.authenticationService.currentUserSignedIn());
    });*/
  }
}
