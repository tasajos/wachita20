import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarwachitaComponent } from './agregarwachita.component';

describe('AgregarwachitaComponent', () => {
  let component: AgregarwachitaComponent;
  let fixture: ComponentFixture<AgregarwachitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarwachitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarwachitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
