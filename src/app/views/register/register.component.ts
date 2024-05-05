import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.reactiveForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required]]
    }, {
      validator: this.mustMatch('password', 'repassword')
    });
  }

  ngOnInit(): void {
  }

  register(): void {
    if (this.reactiveForm.invalid) {
      return;  // Mostrar mensaje de error o manejar la visualización de errores
    }
    const { email, password } = this.reactiveForm.value;
    this.auth.SignUp(email, password)
      .then(() => {
        this.router.navigate(['/dashboard']); // o cualquier ruta que desees después del registro
      })
      .catch(error => {
        window.alert(error.message); // Manejo de errores
      });
  }

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['mustMatch']) {
        return;  // Retorna si otro validador ya encontró un error en el ConfirmPassword
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mustMatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }
}
