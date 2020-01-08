import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectedAgeCalculatorComponent } from './corrected-age-calculator.component';

describe('CorrectedAgeCalculatorComponent', () => {
  let component: CorrectedAgeCalculatorComponent;
  let fixture: ComponentFixture<CorrectedAgeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectedAgeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectedAgeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
