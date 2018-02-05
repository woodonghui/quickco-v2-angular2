import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../model/supplier';
import { Product } from '../model/product';
import { API_URL } from './const';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsBySupplier(supplierId): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/suppliers/${supplierId}/products`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${API_URL}/products`, product);
  }

  updateOrCreate(product: Product): Observable<Product> {
    if (product.id !== undefined) {
      return this.update(product);
    } else {
      return this.create(product);
    }
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${API_URL}/products/${product.id}`, product);
  }

}
