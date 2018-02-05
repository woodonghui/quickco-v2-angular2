import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './const';
import { SaleRecord } from '../model/sale-record';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SaleRecordService {

  constructor(private http: HttpClient) { }

  getSaleRecordsByOutlet(outletId: string): Observable<SaleRecord[]> {
    const filter = { order: 'date DESC' };
    return this.http.get<SaleRecord[]>(`${API_URL}/outlets/${outletId}/salerecords?filter=${JSON.stringify(filter)}`);
  }

  create(saleRecord: SaleRecord): Observable<SaleRecord> {
    return this.http.post<SaleRecord>(`${API_URL}/salerecords`, saleRecord);
  }

}
