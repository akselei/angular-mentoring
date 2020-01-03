import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';
import { AppState } from '@core/store/app.states';
import { LogIn } from '@core/store/auth/actions/auth.actions';
import { Store } from '@ngrx/store';

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
      private authService: AuthService,
      private store: Store<AppState>
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
      this.store.dispatch(new LogIn(this.loginForm.value));
  }
}
