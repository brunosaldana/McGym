import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistatareasComponent } from './vistatareas.component';

describe('VistatareasComponent', () => {
  let component: VistatareasComponent;
  let fixture: ComponentFixture<VistatareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistatareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistatareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
