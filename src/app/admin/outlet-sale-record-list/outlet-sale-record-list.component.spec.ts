import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletSaleRecordListComponent } from './outlet-sale-record-list.component';

describe('OutletSaleRecordListComponent', () => {
  let component: OutletSaleRecordListComponent;
  let fixture: ComponentFixture<OutletSaleRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletSaleRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletSaleRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
