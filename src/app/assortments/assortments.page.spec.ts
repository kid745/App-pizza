import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssortmentsPage } from './assortments.page';

describe('AssortmentsPage', () => {
  let component: AssortmentsPage;
  let fixture: ComponentFixture<AssortmentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssortmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
