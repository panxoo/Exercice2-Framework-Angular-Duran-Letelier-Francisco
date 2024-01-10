import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp2DebutComponent } from './tp2-debut.component';

describe('Tp2DebutComponent', () => {
  let component: Tp2DebutComponent;
  let fixture: ComponentFixture<Tp2DebutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp2DebutComponent]
    });
    fixture = TestBed.createComponent(Tp2DebutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
