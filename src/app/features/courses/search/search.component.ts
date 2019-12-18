import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SearchService } from '@features/services/search/search.service';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
    @ViewChild('searchInput', {static: false}) searchInput: ElementRef;

    constructor(
        private searchService: SearchService,
        public el: ElementRef
    ) { }

    ngAfterViewInit(): void {
        fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(
                map(e => e.target.value),
                filter(res => res.length >= 2),
                debounceTime(500),
                distinctUntilChanged()
            ).subscribe(res => this.searchService.getData(res));
    }

    ngOnInit() {
    }
}
