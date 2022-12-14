import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products')
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
