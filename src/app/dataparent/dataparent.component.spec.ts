import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataparentComponent } from './dataparent.component';

describe('DataparentComponent', () => {
  let component: DataparentComponent;
  let fixture: ComponentFixture<DataparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
