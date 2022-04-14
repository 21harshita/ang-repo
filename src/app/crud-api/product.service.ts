// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
// import { catchError, Observable , throwError } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

// apiUrl: string = 'http://localhost:3000/books';
// headers = new HttpHeaders().set('Content-Type', 'application/json');

//   constructor(private httpClient : HttpClient) { }

//   readAll(): Observable<any> {
//     return this.httpClient.get(this.apiUrl).pipe(
//       catchError(this.handleError)
//     );
//   }
//   // handleError(handleError: any): import("rxjs").OperatorFunction<Object, any> {
//   //   throw new Error('Method not implemented.');
//   // }

//   read(id): Observable<any> {
//     return this.httpClient.get(`${apiUrl}/${id}`).pipe(
//       catchError(this.handleError)
//     );
//   }

//   create(data): Observable<any> {
//     return this.httpClient.post(this.apiUrl, data).pipe(
//       catchError(this.handleError)
//     );
//   }

//   update(id, data): Observable<any> {
//     return this.httpClient.put(`${apiUrl}/${id}`, data).pipe(
//       catchError(this.handleError)
//     );
//   }

//   delete(id): Observable<any> {
//     return this.httpClient.delete(`${apiUrl}/${id}`).pipe(
//       catchError(this.handleError)
//     );
//   }

//   deleteAll(): Observable<any> {
//     return this.httpClient.delete(this.apiUrl);
//   }

//   searchByName(name): Observable<any> {
//     return this.httpClient.get(`${apiUrl}?name=${name}`).pipe(
//       catchError(this.handleError)
//     );
//   }
//   handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred:', error.error.message);
//     } else {
//       console.error(
//         `Backend returned code ${error.status}, ` +
//         `body was: ${error.error}`);
//     }
//     return throwError(
//       'Something bad happened; please try again later.');
//   };
// }
// function apiUrl(apiUrl: any): Observable<any> {
//   throw new Error('Function not implemented.');
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
    
import { Post } from './post';
     
@Injectable({
  providedIn: 'root'
})
export class ProductService {
     
  private apiURL = "https://jsonplaceholder.typicode.com";
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/posts/')

    .pipe(
      catchError(this.errorHandler)
    )
  }

  getUserById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.apiURL + id);
  }
     
  create(post:Post): Observable<any> {

    return this.httpClient.post(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }  
     
  find(id:number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/posts/' + id)

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  update( post:Post): Observable<any> {

    return this.httpClient.put(this.apiURL + '/posts/' + post.id,post)
     
  }
     
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions)

    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }
    
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
