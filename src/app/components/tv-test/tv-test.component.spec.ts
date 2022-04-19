import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTestComponent } from './tv-test.component';

describe('TvTestComponent', () => {
  let component: TvTestComponent;
  let fixture: ComponentFixture<TvTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
