import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidChartsComponent } from './covid-charts.component';

describe('CovidChartsComponent', () => {
  let component: CovidChartsComponent;
  let fixture: ComponentFixture<CovidChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CovidChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
