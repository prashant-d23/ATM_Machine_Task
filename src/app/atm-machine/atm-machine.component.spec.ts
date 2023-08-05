import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATMMachineComponent } from './atm-machine.component';

describe('ATMMachineComponent', () => {
  let component: ATMMachineComponent;
  let fixture: ComponentFixture<ATMMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATMMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATMMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
