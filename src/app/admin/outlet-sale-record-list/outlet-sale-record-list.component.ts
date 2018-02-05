import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SaleRecordService } from '../../service/sale-record.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SaleRecord } from '../../model/sale-record';

@Component({
  selector: 'quickco-outlet-sale-record-list',
  templateUrl: './outlet-sale-record-list.component.html',
  styleUrls: ['./outlet-sale-record-list.component.css']
})
export class OutletSaleRecordListComponent implements OnInit {

  displayedColumns = ['date', 'totalincome', 'foodpandaincome'];
  dataSource: MatTableDataSource<SaleRecord>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: SaleRecordService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getSaleRecordsByOutlet(id).subscribe((records) => {
      this.dataSource = new MatTableDataSource<SaleRecord>(records);
      this.dataSource.paginator = this.paginator;
    });
  }

  goBack() {
    this.location.back();
  }

}
