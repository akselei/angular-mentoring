import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd, NavigationEnd, Event } from '@angular/router';
import { buffer, filter, pluck, map } from 'rxjs/operators';

const isNavigationEnd = (e: Event) => e instanceof NavigationEnd;
const isActivationEnd = (e: Event) => e instanceof ActivationEnd;

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  shownData: any = [];

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
    this.routerListener();
  }

  routerListener(): void {
    const navigationEnd = this.router.events.pipe(filter(isNavigationEnd));

    this.router.events
        .pipe(
            filter(isActivationEnd),
            pluck('snapshot'),
            pluck('routeConfig'),
            buffer(navigationEnd),
            map((data: any[]) => data.reverse())
        ).subscribe(res => {
          this.shownData = res.reduce((a, b) => {
            return [a, b].filter(item => item.data);
          });
        });
  }
}
