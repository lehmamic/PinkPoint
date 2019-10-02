import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbingSitePage } from './climbing-site.page';

describe('ClimbingSitePage', () => {
  let component: ClimbingSitePage;
  let fixture: ComponentFixture<ClimbingSitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbingSitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbingSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
