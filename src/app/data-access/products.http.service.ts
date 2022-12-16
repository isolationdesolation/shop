import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductPayload } from '../const/product.const';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }

  addProduct(payload: ProductPayload): Observable<Product> {
    return this.http.post<Product>('https://fakestoreapi.com/products', payload)
  }

  updateProduct(id: string, payload: ProductPayload): Observable<Product> {
    return this.http.put<Product>(`https://fakestoreapi.com/products/${id}`, payload)
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`https://fakestoreapi.com/products/${id}`)
  }
}
