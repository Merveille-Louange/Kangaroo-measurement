import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonatalWeightGainCalculatorComponent } from './neonatal-weight-gain-calculator.component';

describe('NeonatalWeightGainCalculatorComponent', () => {
  let component: NeonatalWeightGainCalculatorComponent;
  let fixture: ComponentFixture<NeonatalWeightGainCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeonatalWeightGainCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeonatalWeightGainCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
