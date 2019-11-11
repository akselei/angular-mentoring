import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @Output() searchCourses = new EventEmitter<string>();
    searchText: string;

    constructor() { }

    ngOnInit() {
    }

    searchSubmit(): void {
        this.searchCourses.emit(this.searchText);
    }
}
