import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCardPage } from './modal-card.page';

describe('ModalCardPage', () => {
  let component: ModalCardPage;
  let fixture: ComponentFixture<ModalCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
