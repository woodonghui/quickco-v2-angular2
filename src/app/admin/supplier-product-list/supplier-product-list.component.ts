import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../model/product';
import { SupplierService } from '../../service/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatPaginator, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { ProductFormDialogComponent } from '../product-form-dialog/product-form-dialog.component';
import { Supplier } from '../../model/supplier';
import { DialogCloseAction } from '../../service/actions';

@Component({
  selector: 'quickco-supplier-product-list',
  templateUrl: './supplier-product-list.component.html',
  styleUrls: ['./supplier-product-list.component.css']
})
export class SupplierProductListComponent implements OnInit {
  supplier: Supplier;
  products: Product[];
  displayedColumns = ['name', 'unitprice', 'sku', 'action'];
  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: SupplierService,
    private matSnackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(id).subscribe((supplier) => {
      this.supplier = supplier;
      this.service.getProductsBySupplier(this.supplier.id).subscribe((products) => {
        this.products = products;
        this.dataSource = new MatTableDataSource<Product>(products);
        this.dataSource.paginator = this.paginator;
      });
    }, (error) => {
      this.matSnackBar.open(error.error.error.message, 'Close', {duration: 4000, panelClass: 'error'});
      this.router.navigate(['/admin/supplier']);
    });
  }

  goBack() {
    this.location.back();
  }

  openEditingProductDialog(product?: Product) {
    const supplierId = this.route.snapshot.paramMap.get('id');
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      width: '450px',
      data:  {supplier: this.supplier, product: product}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result.action === DialogCloseAction.Refresh) {
        this.matSnackBar.open('Item was saved successfully!', 'OK', {
          duration: 4000,
        });
        this.service.getProductsBySupplier(supplierId).subscribe((products) => {
          this.products = products;
          this.dataSource = new MatTableDataSource<Product>(products);
        });
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
