import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddEditComponentComponent } from './employee-add-edit-component.component';

describe('EmployeeAddEditComponentComponent', () => {
  let component: EmployeeAddEditComponentComponent;
  let fixture: ComponentFixture<EmployeeAddEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAddEditComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeAddEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
