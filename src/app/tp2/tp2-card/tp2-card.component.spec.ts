import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp2CardComponent } from './tp2-card.component';

describe('Tp2CardComponent', () => {
  let component: Tp2CardComponent;
  let fixture: ComponentFixture<Tp2CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp2CardComponent]
    });
    fixture = TestBed.createComponent(Tp2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
