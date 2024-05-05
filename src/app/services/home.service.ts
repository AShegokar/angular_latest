import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }

  getPosts(): Observable<any>{
    return this.http.get('https://dummyjson.com/posts');
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`https://dummyjson.com/products/${id}`);
  }

  deletePost(id:number):Observable<any>{
    return this.http.delete(`https://dummyjson.com/posts/${id}`);
  }
  
  addProduct(product:any): Observable<any>{
    return this.http.post('https://dummyjson.com/products/add',product);
  }

  addPost(post:any): Observable<any>{
    return this.http.post('https://dummyjson.com/posts/add',post);
  }

  updateProduct(product:any, id: any): Observable<any>{
    return this.http.put(`https://dummyjson.com/products/${id}`,product);
  }

  updatePost(post:any, id:any): Observable<any>{
    return this.http.put(`https://dummyjson.com/posts/${id}`, post);
  }

  getCountryData(): Observable<any> {
    return this.http.get('./assets/country.json');
  }

  getItemsData(): Observable<any> {
    return this.http.get('./assets/items.json');
  }
}
