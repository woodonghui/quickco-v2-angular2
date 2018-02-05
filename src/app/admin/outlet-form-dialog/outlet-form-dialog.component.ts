import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { DialogCloseAction } from '../../service/actions';
import { OutletService } from '../../service/outlet.service';
import { Outlet } from '../../model/outlet';

@Component({
  selector: 'quickco-outlet-form-dialog',
  templateUrl: './outlet-form-dialog.component.html',
  styleUrls: ['./outlet-form-dialog.component.css']
})
export class OutletFormDialogComponent implements OnInit {

  outlet: Outlet;

  constructor(
    private dialogRef: MatDialogRef<OutletFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private service: OutletService,
    private snackBar: MatSnackBar) {
    if (data.outlet) {
      this.outlet = Object.assign({}, data.outlet);
    } else {
      this.outlet = new Outlet('', '', '');
    }
  }

  ngOnInit() {
  }

  onSaveClick() {
    this.service.updateOrCreate(this.outlet).subscribe((outlet) => {
      this.dialogRef.close({action: DialogCloseAction.Refresh});
    }, (error: any) => {
      console.log(error);
      this.snackBar.open(error.error.error.message, 'Close', {duration: 4000});
    });
  }

}
