import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '@features/courses/models/courses.model';

@Injectable()
export class SearchService {
  courseData = 'http://localhost:3004/courses';
  searchEvents = new Subject();

  constructor(
      private http: HttpClient
  ) { }

  getData(text, page) {
    this.http.get<ICourse[]>(this.courseData + `?textFragment=${text.toLowerCase().trim()}`)
        .subscribe(res => {
          this.sendSearchedData(res);
        });
  }


  sendSearchedData(data: any): void {
    data = data || [];

    if (data) {
      this.searchEvents.next(data);
    }
  }

  getSearchedData(): Observable<any> {
    return this.searchEvents.asObservable();
  }
}
