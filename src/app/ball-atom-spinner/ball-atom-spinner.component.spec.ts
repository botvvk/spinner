import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallAtomSpinnerComponent } from './ball-atom-spinner.component';

describe('BallAtomSpinnerComponent', () => {
  let component: BallAtomSpinnerComponent;
  let fixture: ComponentFixture<BallAtomSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallAtomSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallAtomSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
