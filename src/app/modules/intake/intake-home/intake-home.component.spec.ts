import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeHomeComponent } from './intake-home.component';

describe('IntakeHomeComponent', () => {
  let component: IntakeHomeComponent;
  let fixture: ComponentFixture<IntakeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
