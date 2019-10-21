import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCoursesComponent } from './button-courses.component';

describe('ButtonCoursesComponent', () => {
  let component: ButtonCoursesComponent;
  let fixture: ComponentFixture<ButtonCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
