import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@core/services/loader/loader.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    loading$: Observable<boolean>;

    constructor(
        private loadingService: LoaderService
    ) {
        this.loading$ = this.loadingService.isLoading;
    }

    ngOnInit() {
    }

}
