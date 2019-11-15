import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { BreadcrumbsComponent } from '@features/courses/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from '@features/courses/search/search.component';
import { ButtonCoursesComponent } from '@features/courses/button-courses/button-courses.component';
import { CourseItemComponent } from '@features/courses/course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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
      spyOn(component, 'openDeleteDialog');

      component.openDeleteDialog(1);
      expect(component.openDeleteDialog).toHaveBeenCalledWith(1);
  });

  it('should return console log for Load More function', () => {
      spyOn(component, 'loadMoreHandler');

      const loadMore = fixture.debugElement.nativeElement.querySelector('.courses__content_load-more-link');
      loadMore.click();

      expect(component.loadMoreHandler).toHaveBeenCalled();
  });
});
