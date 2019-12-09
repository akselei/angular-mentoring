import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private authService: AuthService
  ) {
        this.loginForm = this.fb.group({
          login: [''],
          password: ['']
        });

        if (this.authService.currentUserValue) {
          this.router.navigate(['/']);
        }
  }

  ngOnInit() {
  }

  onSubmit(): void {
      this.authService.login(this.loginForm.value.login, this.loginForm.value.password)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate(['/']);
              },
              error => {
                  this.authService.error(error);
              });
  }
}
