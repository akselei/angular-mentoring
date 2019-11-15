import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse } from '@features/courses/models/courses.model';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeleteDialogComponent } from '@features/dialogs/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '@features/dialogs/edit-dialog/edit-dialog.component';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    courseData = 'assets/fakeCourseData.json';
    courseEvents = new Subject();

    deleteDialogRef: MatDialogRef<DeleteDialogComponent>;
    editDialogRef: MatDialogRef<EditDialogComponent>;

    constructor(
        private http: HttpClient,
        public deleteDialog: MatDialog,
        public editDialog: MatDialog
    ) { }

    getData(): Observable<ICourse[]> {
        return this.http.get<ICourse[]>(this.courseData);
    }

    deleteDialogItem(opts) {
        this.deleteDialogRef = this.deleteDialog.open(DeleteDialogComponent, {
            width: '400px',
            data: {
                title: opts.title,
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
    }

    getItem(id) {
        console.log('get item by ID ' + id);
    }

    editItem() {
        this.editDialogRef = this.editDialog.open(EditDialogComponent);
    }
}
