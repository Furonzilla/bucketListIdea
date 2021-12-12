import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { checkPasswordValidator } from 'src/app/validators/check-password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  router : Router;
  constructor(private formBuilder: FormBuilder, private auth: AngularFireAuth, router : Router) {
    this.router = router;
    this.signupForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      checkPassword: formBuilder.group(
        {
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
        },
        {
          validator: checkPasswordValidator('password', 'confirmPassword'),
        }
      ),
    });
  }

  createAccount() {
    const { email, password } = this.signupForm.value;
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => console.log('SignUpComponent > createUser > user'));
    this.router.navigate(['']);
  }

  ngOnInit(): void {

  }
}
