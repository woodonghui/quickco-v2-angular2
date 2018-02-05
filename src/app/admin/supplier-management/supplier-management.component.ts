import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../service/supplier.service';
import { Supplier } from '../../model/supplier';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SupplierFormDialogComponent } from '../supplier-form-dialog/supplier-form-dialog.component';
import { DialogCloseAction } from '../../service/actions';

@Component({
  selector: 'quickco-supplier-management',
  templateUrl: './supplier-management.component.html',
  styleUrls: ['./supplier-management.component.css'],
})
export class SupplierManagementComponent implements OnInit {

  suppliers: Supplier[];

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private service: SupplierService) { }

  ngOnInit() {
    this.service.getAll().subscribe((suppliers) => {
      this.suppliers = suppliers;
    });
  }

  openEditingSupplierDialog(supplier?: Supplier): void {
    const dialogRef = this.dialog.open(SupplierFormDialogComponent, {
      width: '450px',
      data: {supplier: supplier}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result.action === DialogCloseAction.Refresh) {
        this.snackBar.open('Item was added successfully!', 'OK', {
          duration: 4000,
        });
        this.service.getAll().subscribe((suppliers) => {
          this.suppliers = suppliers;
        });
      }
    });
  }


}
