import { ComponentFixture, TestBed } from '@angular/core/testing';

import { misActividadesComponent } from './misActividades.component';

describe('misActividadesComponent', () => {
  let component: misActividadesComponent;
  let fixture: ComponentFixture<misActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ misActividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(misActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
