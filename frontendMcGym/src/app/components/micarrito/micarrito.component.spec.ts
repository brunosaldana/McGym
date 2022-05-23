import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicarritoComponent } from './micarrito.component';

describe('MicarritoComponent', () => {
  let component: MicarritoComponent;
  let fixture: ComponentFixture<MicarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
