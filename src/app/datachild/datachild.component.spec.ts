import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatachildComponent } from './datachild.component';

describe('DatachildComponent', () => {
  let component: DatachildComponent;
  let fixture: ComponentFixture<DatachildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatachildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatachildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
