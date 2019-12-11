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

    constructor(
        private searchService: SearchService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    searchSubmit(): void {
        this.searchService.getData(this.searchText);
    }
}
