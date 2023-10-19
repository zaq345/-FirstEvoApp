import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPopupComponent } from './sub-popup.component';

describe('SubPopupComponent', () => {
  let component: SubPopupComponent;
  let fixture: ComponentFixture<SubPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubPopupComponent]
    });
    fixture = TestBed.createComponent(SubPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
