import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hellob1Component } from './hellob1.component';

describe('Hellob1Component', () => {
  let component: Hellob1Component;
  let fixture: ComponentFixture<Hellob1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hellob1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hellob1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
