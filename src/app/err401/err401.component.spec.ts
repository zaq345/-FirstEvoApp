import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Err401Component } from './err401.component';

describe('Err401Component', () => {
  let component: Err401Component;
  let fixture: ComponentFixture<Err401Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Err401Component]
    });
    fixture = TestBed.createComponent(Err401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
