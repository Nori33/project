import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToUpComponent } from './to-up.component';

describe('ToUpComponent', () => {
  let component: ToUpComponent;
  let fixture: ComponentFixture<ToUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
