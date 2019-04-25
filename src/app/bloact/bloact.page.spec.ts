import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloactPage } from './bloact.page';

describe('BloactPage', () => {
  let component: BloactPage;
  let fixture: ComponentFixture<BloactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
