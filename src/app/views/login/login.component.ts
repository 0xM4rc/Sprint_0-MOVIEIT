import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  reactiveForm: FormGroup = new FormGroup({});

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login_user(): void {
    const rawForm = this.reactiveForm.getRawValue()
    if (!rawForm.email || !rawForm.email) {
      return;
    }
    this.auth.login(rawForm.email, rawForm.password).subscribe({
      next:()=>{
        this.router.navigateByUrl('')
      },
      error: (err) => {}
    })
  }
}
