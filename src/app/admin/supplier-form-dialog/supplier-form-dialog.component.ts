import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../model/supplier';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { SupplierService } from '../../service/supplier.service';
import { DialogCloseAction } from '../../service/actions';

@Component({
  selector: 'quickco-supplier-form-dialog',
  templateUrl: './supplier-form-dialog.component.html',
  styleUrls: ['./supplier-form-dialog.component.css']
})
export class SupplierFormDialogComponent implements OnInit {

  supplier: Supplier;

  constructor(private dialogRef: MatDialogRef<SupplierFormDialogComponent>,
    private service: SupplierService, private snackBar: MatSnackBar) {
      this.supplier = new Supplier('', '', '', false, false);
    }

  ngOnInit() {
  }

  onSaveClick() {
    this.service.create(this.supplier).subscribe((outlet) => {
      this.dialogRef.close({action: DialogCloseAction.Refresh});
    }, (error: any) => {
      this.snackBar.open(error.error.error.message, 'Close', {duration: 4000});
    });
  }

}
