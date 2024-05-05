import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup = new FormGroup({});


  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  login_user(): void {
    if (this.reactiveForm.invalid) {
      window.alert('Please fill out the form correctly.');
      return;
    }
    const rawForm = this.reactiveForm.value;
    this.auth.SignIn(rawForm.email, rawForm.password)
      .then(() => {
        this.router.navigate(['home']);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
}

