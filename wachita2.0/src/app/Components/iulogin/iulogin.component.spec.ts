import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IuloginComponent } from './iulogin.component';

describe('IuloginComponent', () => {
  let component: IuloginComponent;
  let fixture: ComponentFixture<IuloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IuloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IuloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
