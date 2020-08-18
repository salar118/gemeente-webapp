import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlantHomeComponent } from './klant-home.component';

describe('KlantHomeComponent', () => {
  let component: KlantHomeComponent;
  let fixture: ComponentFixture<KlantHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlantHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
