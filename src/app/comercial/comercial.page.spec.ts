import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialPage } from './comercial.page';

describe('ComercialPage', () => {
  let component: ComercialPage;
  let fixture: ComponentFixture<ComercialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
