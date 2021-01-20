import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvsDetailsComponent } from './pvs-details.component';

describe('PvsDetailsComponent', () => {
  let component: PvsDetailsComponent;
  let fixture: ComponentFixture<PvsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
