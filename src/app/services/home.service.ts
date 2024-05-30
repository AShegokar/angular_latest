import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  // 3rd way of sending data 
  private dataSubject = new Subject<string>();
  data$ = this.dataSubject.asObservable(); // if data is coming from observable then add $ 

  sendData(data: string) {
    this.dataSubject.next(data);
  }

  // 3rd way of sending data with adding line 10 as well above.
  clientMockData(data: string){
    this.dataSubject.next(data);
  }

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('https://dummyjson.com/products').pipe(catchError(this.handleError));
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

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
