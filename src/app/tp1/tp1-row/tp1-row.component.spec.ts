import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp1RowComponent } from './tp1-row.component';

describe('Tp1RowComponent', () => {
  let component: Tp1RowComponent;
  let fixture: ComponentFixture<Tp1RowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tp1RowComponent]
    });
    fixture = TestBed.createComponent(Tp1RowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
