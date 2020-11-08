import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAgenteComponent } from './crear-agente.component';

describe('CrearAgenteComponent', () => {
  let component: CrearAgenteComponent;
  let fixture: ComponentFixture<CrearAgenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAgenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
