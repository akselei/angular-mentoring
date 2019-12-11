import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '@features/courses/models/courses.model';

@Injectable()
export class SearchService {
  courseData = 'http://localhost:3004/courses';
  searchEvents = new Subject();

  constructor(
      private http: HttpClient
  ) { }

  getData(text) {
    this.http.get<ICourse[]>(this.courseData)
        .subscribe(res => {
          this.sendSearchedData(res);
        });
  }


  sendSearchedData(data: Array<ICourse> = []): void {
    if (data) {
      this.searchEvents.next(data);
    }
  }

  getSearchedData(): Observable<any> {
    return this.searchEvents.asObservable();
  }
}
