import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';

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
          email: [''],
          password: ['']
        });

        if (this.authService.currentUserValue) {
          this.router.navigate(['/']);
        }
  }

  ngOnInit() {
  }

  onSubmit(): void {
      this.authService.login(this.loginForm.value)
          .subscribe(
              data => {
                this.router.navigate(['/']);
              },
              error => {
                this.error = error;
              }
          );
  }
}
