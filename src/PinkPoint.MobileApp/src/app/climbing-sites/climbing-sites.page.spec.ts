import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbingSitesPage } from './climbing-sites.page';

describe('ClimbingSitesPage', () => {
  let component: ClimbingSitesPage;
  let fixture: ComponentFixture<ClimbingSitesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbingSitesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbingSitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
