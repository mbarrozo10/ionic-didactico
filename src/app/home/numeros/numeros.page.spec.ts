import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumerosPage } from './numeros.page';

describe('NumerosPage', () => {
  let component: NumerosPage;
  let fixture: ComponentFixture<NumerosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NumerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
