import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  reactiveForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required)
    }, {validators: this.equalPasswords});
  }

  equalPasswords: ValidatorFn = (control): {[key: string]: any} | null => {
    const group = control as FormGroup;
    let password = group.controls['password'].value;
    let repassword = group.controls['repassword'].value;
    return password === repassword ? null : {notSame: true};
  }
}
