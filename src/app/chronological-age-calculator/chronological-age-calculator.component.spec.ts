import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronologicalAgeCalculatorComponent } from './chronological-age-calculator.component';

describe('ChronologicalAgeCalculatorComponent', () => {
  let component: ChronologicalAgeCalculatorComponent;
  let fixture: ComponentFixture<ChronologicalAgeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronologicalAgeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronologicalAgeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
