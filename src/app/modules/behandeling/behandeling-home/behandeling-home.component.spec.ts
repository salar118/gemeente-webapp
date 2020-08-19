import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehandelingHomeComponent } from './behandeling-home.component';

describe('BehandelingHomeComponent', () => {
  let component: BehandelingHomeComponent;
  let fixture: ComponentFixture<BehandelingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehandelingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehandelingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
