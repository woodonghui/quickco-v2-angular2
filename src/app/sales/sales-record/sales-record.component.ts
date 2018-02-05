import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { OutletService } from '../../service/outlet.service';
import { Outlet } from '../../model/outlet';
import { Supplier } from '../../model/supplier';
import { SupplierService } from '../../service/supplier.service';
import { Product } from '../../model/product';
import { CostItemLine } from '../../model/cost-item';
import { SaleRecord } from '../../model/sale-record';
import { SaleRecordService } from '../../service/sale-record.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'quickco-sales-record',
  templateUrl: './sales-record.component.html',
  styleUrls: ['./sales-record.component.css']
})
export class SalesRecordComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  outlets: Outlet[];
  suppliers: Supplier[];
  supplierProducts: Product[];

  costItems: CostItemLine[];

  constructor(
    private router: Router,
    private matSnackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private outletService: OutletService,
    private supplierService: SupplierService,
    private saleRecordService: SaleRecordService) {
      this.costItems = [];
    }

  ngOnInit() {
    this.outletService.getAll().subscribe((outlets) => {
      this.outlets = outlets;
    });

    this.supplierService.getAll().subscribe((suppliers) => {
      this.suppliers = suppliers;
    });

    this.firstFormGroup = this.formBuilder.group({
      outlet: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.secondFormGroup = this.formBuilder.group({
      totalincome: ['', Validators.required],
      foodpandaincome: ['', Validators.required],
      bankincash: ['', Validators.required]
    });
  }

  onSelectSupplier($event) {
    this.supplierService.getProductsBySupplier($event.value).subscribe((products) => {
      this.supplierProducts = products;
    });
  }

  addCostItem(product, quantity) {
    this.costItems.push({
      productname: product.name,
      quantity: quantity
    });
  }

  save() {
    const saleRecord = new SaleRecord(this.firstFormGroup.value.outlet.id,
      this.secondFormGroup.value.totalincome, this.secondFormGroup.value.bankincash,
      this.secondFormGroup.value.foodpandaincome, this.firstFormGroup.value.date);
      this.saleRecordService.create(saleRecord).subscribe((result) => {
        this.matSnackBar.open('Item was saved successfully!', 'OK', {duration: 4000});
        this.router.navigate([`/admin/outlet/${result.outletid}`]);
      });
  }

}
