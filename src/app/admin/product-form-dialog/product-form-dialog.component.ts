import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../../model/product';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Supplier } from '../../model/supplier';
import { ProductService } from '../../service/product.service';
import { DialogCloseAction } from '../../service/actions';

@Component({
  selector: 'quickco-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.css']
})
export class ProductFormDialogComponent implements OnInit {

  product: Product;
  supplier: Supplier;

  constructor(
    private dialogRef: MatDialogRef<ProductFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private service: ProductService, private matSnackBar: MatSnackBar) {
      this.supplier = data.supplier;
      if (data.product) {
        this.product = Object.assign({}, data.product);
      } else {
        this.product = new Product(this.supplier.id, '', '', null, '');
      }
  }

  ngOnInit() {}

  onSaveClick() {
    this.service.updateOrCreate(this.product).subscribe((product) => {
      this.dialogRef.close({action: DialogCloseAction.Refresh});
    }, (error) => {
      this.matSnackBar.open(error.error.error.message, 'Close', {duration: 4000});
    });
  }

}

