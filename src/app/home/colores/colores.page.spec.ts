import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColoresPage } from './colores.page';

describe('ColoresPage', () => {
  let component: ColoresPage;
  let fixture: ComponentFixture<ColoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ColoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
