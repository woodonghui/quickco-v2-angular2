import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletService } from './outlet.service';
import { SaleRecordService } from './sale-record.service';
import { SupplierService } from './supplier.service';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    OutletService,
    SaleRecordService,
    SupplierService,
    ProductService
  ]
})
export class ServiceModule { }
