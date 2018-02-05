import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRecordComponent } from './sales-record/sales-record.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  MatCheckboxModule,
  MatFormFieldModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: SalesRecordComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SalesRecordComponent],
  exports: [RouterModule]
})
export class SalesModule { }
