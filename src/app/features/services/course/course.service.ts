import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICourse } from '@features/courses/models/courses.model';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteDialogComponent } from '@features/dialogs/delete-dialog/delete-dialog.component';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()

export class CourseService {
    courseData = 'http://localhost:3004/courses';
    courseEvents = new Subject();
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    deleteDialogRef: MatDialogRef<DeleteDialogComponent>;

    constructor(
        private http: HttpClient,
        public deleteDialog: MatDialog,
        private router: Router
    ) { }

    getData(page): Observable<ICourse[]> {
        return this.http.get<ICourse[]>(this.courseData + `?start=${page}&count=3`);
    }

    deleteDialogItem(opts) {
        this.deleteDialogRef = this.deleteDialog.open(DeleteDialogComponent, {
            width: '400px',
            data: {
                name: opts.name,
                id: opts.id
            }
        });
        this.deleteDialogRef.afterClosed().subscribe(result => {
            this.sendId(result);
        });
    }

    sendId(id: number): void {
        if (id) {
            this.courseEvents.next({itemId: id});
        }
    }

    getId(): Observable<any> {
        return this.courseEvents.asObservable();
    }

    createItem() {
        console.log('create item test');
        this.router.navigateByUrl('/');
    }

    getDataById(id) {
        const url = `${this.courseData}/${id}`;
        return this.http.get<ICourse>(url, this.httpOptions);
    }

    deleteItem(courseId: ICourse | number) {
        const id = typeof courseId === 'number' ? courseId : courseId.id;
        const url = `${this.courseData}/${id}`;

        return this.http.delete<ICourse>(url, this.httpOptions).subscribe();
    }
}
