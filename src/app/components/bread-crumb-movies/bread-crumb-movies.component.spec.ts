import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbMoviesComponent } from './bread-crumb-movies.component';

describe('BreadCrumbMoviesComponent', () => {
  let component: BreadCrumbMoviesComponent;
  let fixture: ComponentFixture<BreadCrumbMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadCrumbMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
