import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbingRoutePage } from './climbing-route.page';

describe('ClimbingRoutePage', () => {
  let component: ClimbingRoutePage;
  let fixture: ComponentFixture<ClimbingRoutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbingRoutePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbingRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
