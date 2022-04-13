/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinalBillComponent } from './final-bill.component';

describe('FinalBillComponent', () => {
  let component: FinalBillComponent;
  let fixture: ComponentFixture<FinalBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
