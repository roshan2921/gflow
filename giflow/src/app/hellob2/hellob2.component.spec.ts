import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hellob2Component } from './hellob2.component';

describe('Hellob2Component', () => {
  let component: Hellob2Component;
  let fixture: ComponentFixture<Hellob2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hellob2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hellob2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
