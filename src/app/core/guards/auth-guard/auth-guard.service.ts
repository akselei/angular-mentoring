import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
      private authService: AuthService,
      private router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.authService.isAuth()) {
          alert('Should log in');

          this.router.navigate(['/login']);
          return false;
      }

      return true;
  }
}
