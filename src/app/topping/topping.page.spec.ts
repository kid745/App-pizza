import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToppingPage } from './topping.page';

describe('ToppingPage', () => {
  let component: ToppingPage;
  let fixture: ComponentFixture<ToppingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
