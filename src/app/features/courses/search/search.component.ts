import { Component, OnInit } from '@angular/core';
import { SearchService } from '@features/services/search/search.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchText: string;
    searchPage: number;

    constructor(
        private searchService: SearchService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(res => {
            this.searchPage = +res.page;
        });
    }

    searchSubmit(): void {
        this.searchService.getData(this.searchText, this.searchPage);
    }
}
