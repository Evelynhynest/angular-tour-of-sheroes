import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheroesComponent } from './sheroes.component';

describe('SheroesComponent', () => {
  let component: SheroesComponent;
  let fixture: ComponentFixture<SheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
