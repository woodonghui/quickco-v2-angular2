import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletFormDialogComponent } from './outlet-form-dialog.component';

describe('OutletFormDialogComponent', () => {
  let component: OutletFormDialogComponent;
  let fixture: ComponentFixture<OutletFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
