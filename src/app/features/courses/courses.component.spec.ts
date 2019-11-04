import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { BreadcrumbsComponent } from '@features/courses/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from '@features/courses/search/search.component';
import { ButtonCoursesComponent } from '@features/courses/button-courses/button-courses.component';
import { CourseItemComponent } from '@features/courses/course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            FormsModule,
            HttpClientTestingModule
        ],
          declarations: [
              CoursesComponent,
              BreadcrumbsComponent,
              SearchComponent,
              ButtonCoursesComponent,
              CourseItemComponent
          ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

  it('should show console log for delete item', () => {
      spyOn(component, 'deleteCourseById');

      component.deleteCourseById(1);
      expect(component.deleteCourseById).toHaveBeenCalledWith(1);
  });

  it('should return console log for Load More function', () => {
      spyOn(component, 'loadMoreHandler');

      const loadMore = fixture.debugElement.nativeElement.querySelector('.courses__content_load-more-link');
      loadMore.click();

      expect(component.loadMoreHandler).toHaveBeenCalled();
  });

  it('getJSON() should http GET courseList', () => {

      const courseList = [
          {
              id: 1,
              title: 'Title',
              duration: '1h 28 min',
              data: '9 Nov, 2018',
              description: 'Hello'
          }
      ];

      component.getJSON().subscribe((res) => {
          expect(res).toEqual(courseList);
      });
    });
});
