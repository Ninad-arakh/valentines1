import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MprComponent } from './mpr.component';

describe('MprComponent', () => {
  let component: MprComponent;
  let fixture: ComponentFixture<MprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
