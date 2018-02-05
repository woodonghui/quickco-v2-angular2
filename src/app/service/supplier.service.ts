import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../model/supplier';
import { Product } from '../model/product';
import { API_URL } from './const';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SupplierService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${API_URL}/suppliers`);
  }

  findById(supplierId): Observable<Supplier> {
    return this.http.get<Supplier>(`${API_URL}/suppliers/${supplierId}`);
  }

  create(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${API_URL}/suppliers`, supplier);
  }

  getProductsBySupplier(supplierId): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/suppliers/${supplierId}/products`);
  }

}
