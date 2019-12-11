import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { IName } from '@features/auth/models/user.model';
import { UserService } from '@core/services/auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title = 'Angular mentoring Program';
  user: IName;
  userAvailable: boolean;
  userSubscription: Subscription;

  constructor(
      private authService: AuthService,
      private userService: UserService
      ) { }

  ngOnInit() {
    this.userSubscription = this.authService.currentUser.subscribe(token => {
      if (token) {
        this.userData(token.token);
      } else if (token === null) {
        this.userAvailable = false;
      }
    });
  }

  userData(data): void {
    this.userService.getAll().subscribe(res => {
      for (const user of res) {
        if (data === user.fakeToken) {
          this.userAvailable = true;
          this.user  = {
            first: user.name.first,
            last: user.name.last
          };
        }
      }
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
