import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp1DebutComponent } from './tp1-debut.component';

describe('Tp1DebutComponent', () => {
  let component: Tp1DebutComponent;
  let fixture: ComponentFixture<Tp1DebutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp1DebutComponent]
    });
    fixture = TestBed.createComponent(Tp1DebutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
