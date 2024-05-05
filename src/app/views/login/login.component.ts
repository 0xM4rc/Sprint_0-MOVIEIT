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
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  login_user(): void {
    const rawForm = this.reactiveForm.value;
    if (this.reactiveForm.invalid) {
      window.alert('Please fill out the form correctly.');
      return;
    }
    // Usa el método SignIn del servicio que retorna una promesa
    this.auth.SignIn(rawForm.email, rawForm.password)
      .then(() => {
        // Navega a 'dashboard' o la página que desees después del login exitoso
        this.router.navigate(['dashboard']);
      })
      .catch(error => {
        // Manejo de errores en caso de fallo en el inicio de sesión
        window.alert(error.message);
      });
  }
}
