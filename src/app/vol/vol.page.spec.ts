import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolPage } from './vol.page';

describe('VolPage', () => {
  let component: VolPage;
  let fixture: ComponentFixture<VolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
