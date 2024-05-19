import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {SuccessModalComponent} from "../components/success-modal/success-modal.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  reactiveForm: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private modalController: ModalController
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

  register(): void {
    if (this.reactiveForm.invalid) {
      return;  // Mostrar mensaje de error o manejar la visualización de errores
    }
    const { email, password } = this.reactiveForm.value;
    this.auth.SignUp(email, password)
      .then(() => {
        this.loginSuccess()
        this.router.navigate(['/home']); // o cualquier ruta que desees después del registro
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
  async presentModal() {
    const modal = await this.modalController.create({
      component: SuccessModalComponent,
      // Otras opciones para tu modal
    });
    return await modal.present();
  }

  loginSuccess() {
    this.presentModal();
  }
}
