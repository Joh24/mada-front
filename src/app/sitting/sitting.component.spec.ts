import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittingComponent } from './sitting.component';

describe('SittingComponent', () => {
  let component: SittingComponent;
  let fixture: ComponentFixture<SittingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SittingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
