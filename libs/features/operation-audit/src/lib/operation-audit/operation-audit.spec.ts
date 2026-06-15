import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperationAudit } from './operation-audit';

describe('OperationAudit', () => {
  let component: OperationAudit;
  let fixture: ComponentFixture<OperationAudit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationAudit],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationAudit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
