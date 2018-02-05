import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar, MatDialog } from '@angular/material';
import { OutletFormDialogComponent } from '../outlet-form-dialog/outlet-form-dialog.component';
import { OutletService } from '../../service/outlet.service';
import { DialogCloseAction } from '../../service/actions';
import { Outlet } from '../../model/outlet';

@Component({
  selector: 'quickco-outlet-management',
  templateUrl: './outlet-management.component.html',
  styleUrls: ['./outlet-management.component.css']
})
export class OutletManagementComponent implements OnInit {

  outlets: Outlet[];

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private service: OutletService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe((outlets) => {
      this.outlets = outlets;
    });
  }

  openEditingOutletDialog(outlet?: Outlet): void {
    const dialogRef = this.dialog.open(OutletFormDialogComponent, {
      width: '450px',
      data: {outlet: outlet}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result.action === DialogCloseAction.Refresh) {
        this.snackBar.open('Item was added successfully!', 'OK', {
          duration: 4000,
        });
        this.service.getAll().subscribe((outlets) => {
          this.outlets = outlets;
        });
      }
    });
  }

}
