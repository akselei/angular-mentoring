import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.courseListItem = {
      id: 1,
      title: 'Title',
      duration: '1h 28 min',
      date: '9 Nov, 2018',
      description: 'text'
    };
  });

  it('should emit data to parent component', () => {
    spyOn(component.deleteCourse, 'emit');
    component.deleteCourseItem();

    expect(component.deleteCourse.emit).toHaveBeenCalledWith(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
