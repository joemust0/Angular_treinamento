import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoAwayBlindingComponent } from './two-away-blinding.component';

describe('TwoAwayBlindingComponent', () => {
  let component: TwoAwayBlindingComponent;
  let fixture: ComponentFixture<TwoAwayBlindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoAwayBlindingComponent]
    });
    fixture = TestBed.createComponent(TwoAwayBlindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
