import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadGuysComponent } from './bad-guys.component';

describe('BadGuysComponent', () => {
  let component: BadGuysComponent;
  let fixture: ComponentFixture<BadGuysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadGuysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadGuysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
