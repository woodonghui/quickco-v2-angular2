import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletManagementComponent } from './outlet-management/outlet-management.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule,
  MatPaginatorModule,
  MatTableModule,
  MatListModule,
  MatLineModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { OutletFormDialogComponent } from './outlet-form-dialog/outlet-form-dialog.component';
import { OutletSaleRecordListComponent } from './outlet-sale-record-list/outlet-sale-record-list.component';
import { SupplierProductListComponent } from './supplier-product-list/supplier-product-list.component';
import { ProductFormDialogComponent } from './product-form-dialog/product-form-dialog.component';
import { SupplierFormDialogComponent } from './supplier-form-dialog/supplier-form-dialog.component';

const routes: Routes = [
  {
    path: '',
    // component: OutletManagementComponent,
    children: [
      {
        path: '',
        component: OutletManagementComponent,
      },
      {
        path: 'outlet',
        component: OutletManagementComponent
      },
      {
        path: 'outlet/:id',
        component: OutletSaleRecordListComponent
      },
      {
        path: 'supplier',
        component: SupplierManagementComponent
      },
      {
        path: 'supplier/:id',
        component: SupplierProductListComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatListModule,
    MatLineModule,
    MatSelectModule,
    MatCheckboxModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    OutletManagementComponent,
    SupplierManagementComponent,
    OutletFormDialogComponent,
    OutletSaleRecordListComponent,
    SupplierProductListComponent,
    ProductFormDialogComponent,
    SupplierFormDialogComponent],
  entryComponents: [
    OutletFormDialogComponent,
    ProductFormDialogComponent,
    SupplierFormDialogComponent
  ],
})
export class AdminModule { }
