import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: {
    email: '',
    password: ''
  };

  loginForm: FormGroup;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: [null, [Validators.required, Validators.email]],
          password: [null, Validators.required]
      });
  }

  onSubmit() {
    this.router.navigate(['/dashboard']);
  }
}
