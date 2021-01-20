import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvsListComponent } from './pvs-list.component';

describe('PvsComponent', () => {
  let component: PvsListComponent;
  let fixture: ComponentFixture<PvsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
