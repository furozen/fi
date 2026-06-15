import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RmqMonitor } from './rmq-monitor';

describe('RmqMonitor', () => {
  let component: RmqMonitor;
  let fixture: ComponentFixture<RmqMonitor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmqMonitor],
    }).compileComponents();

    fixture = TestBed.createComponent(RmqMonitor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
