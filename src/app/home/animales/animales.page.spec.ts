import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalesPage } from './animales.page';

describe('AnimalesPage', () => {
  let component: AnimalesPage;
  let fixture: ComponentFixture<AnimalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnimalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
