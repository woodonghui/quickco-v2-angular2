import { Injectable } from '@angular/core';
import { API_URL } from './const';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Outlet } from '../model/outlet';

@Injectable()
export class OutletService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Outlet[]> {
    return this.http.get<Outlet[]>(`${API_URL}/outlets`);
  }

  find(id?: number): Observable<Outlet[]> {
    return this.http.get<Outlet[]>(`${API_URL}/outlets`);
  }

  create(outlet: Outlet): Observable<Outlet> {
    return this.http.post<Outlet>(`${API_URL}/outlets`, outlet);
  }

  updateOrCreate(outlet: Outlet): Observable<Outlet> {
    if (outlet.id !== undefined) {
      return this.update(outlet);
    } else {
      return this.create(outlet);
    }
  }

  update(outlet: Outlet): Observable<Outlet> {
    return this.http.patch<Outlet>(`${API_URL}/outlets/${outlet.id}`, outlet);
  }


}
