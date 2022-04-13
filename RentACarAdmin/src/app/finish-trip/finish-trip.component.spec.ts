/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FinishTripComponent } from './finish-trip.component';

describe('FinishTripComponent', () => {
  let component: FinishTripComponent;
  let fixture: ComponentFixture<FinishTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
