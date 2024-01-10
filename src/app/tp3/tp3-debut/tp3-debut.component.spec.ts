import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp3DebutComponent } from './tp3-debut.component';

describe('Tp3DebutComponent', () => {
  let component: Tp3DebutComponent;
  let fixture: ComponentFixture<Tp3DebutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp3DebutComponent]
    });
    fixture = TestBed.createComponent(Tp3DebutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
