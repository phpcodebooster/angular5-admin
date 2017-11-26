import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { AuthService } from '../services/auth.service';

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

  error = false;
  returnUrl: string;
  loginForm: FormGroup;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private authService: AuthService,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

      // logout current user
      this.authService.logout();
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';

      // login form builder
      this.loginForm = this.formBuilder.group({
          email: [null, [Validators.required, Validators.email]],
          password: [null, Validators.required]
      });
  }

  onSubmit() {
      this.error = false;
      if ( this.authService.login(this.loginForm.value) ) {
           this.router.navigate([this.returnUrl]);
      } else {
        this.error = true;
      }
  }
}
