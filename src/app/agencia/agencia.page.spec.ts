import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaPage } from './agencia.page';

describe('AgenciaPage', () => {
  let component: AgenciaPage;
  let fixture: ComponentFixture<AgenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
