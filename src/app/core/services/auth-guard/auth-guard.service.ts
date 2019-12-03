import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
      private authService: AuthService,
      private router: Router
  ) { }

  canActivate(): boolean {
      if (!this.authService.isAuth()) {
          alert('Should log in');

          this.router.navigate(['/login']);
          return false;
      }

      return true;
  }
}
