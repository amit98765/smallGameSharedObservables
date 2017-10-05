import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodGuysComponent } from './good-guys.component';

describe('GoodGuysComponent', () => {
  let component: GoodGuysComponent;
  let fixture: ComponentFixture<GoodGuysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodGuysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodGuysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
