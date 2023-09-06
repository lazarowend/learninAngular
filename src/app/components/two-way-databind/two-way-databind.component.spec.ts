import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDatabindComponent } from './two-way-databind.component';

describe('TwoWayDatabindComponent', () => {
  let component: TwoWayDatabindComponent;
  let fixture: ComponentFixture<TwoWayDatabindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayDatabindComponent]
    });
    fixture = TestBed.createComponent(TwoWayDatabindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
