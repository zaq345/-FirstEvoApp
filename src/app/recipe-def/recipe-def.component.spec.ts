import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDefComponent } from './recipe-def.component';

describe('RecipeDefComponent', () => {
  let component: RecipeDefComponent;
  let fixture: ComponentFixture<RecipeDefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDefComponent]
    });
    fixture = TestBed.createComponent(RecipeDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
