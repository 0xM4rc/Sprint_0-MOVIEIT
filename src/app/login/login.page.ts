import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {SuccessModalComponent} from "../components/success-modal/success-modal.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  reactiveForm: FormGroup = new FormGroup({});


  constructor(private auth: AuthenticationService,
              private router: Router,
              private modalController: ModalController) {}

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
        if (this.reactiveForm.invalid) {
          return
        }
        this.loginSuccess()
        console.log(rawForm);
        this.router.navigate(['home']);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SuccessModalComponent,
      // Otras opciones para tu modal
    });
    return await modal.present();
  }

  loginSuccess() {
    if(this.auth.isLoggedIn) {
      this.presentModal();
      console.log("registered")
    }
  }
}
