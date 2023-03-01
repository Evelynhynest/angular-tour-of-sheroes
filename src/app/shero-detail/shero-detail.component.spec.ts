import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheroDetailComponent } from './shero-detail.component';

describe('SheroDetailComponent', () => {
  let component: SheroDetailComponent;
  let fixture: ComponentFixture<SheroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheroDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
