import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessUpdateComponent } from './success-update.component';

describe('SuccessUpdateComponent', () => {
  let component: SuccessUpdateComponent;
  let fixture: ComponentFixture<SuccessUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessUpdateComponent]
    });
    fixture = TestBed.createComponent(SuccessUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
