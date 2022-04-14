import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { tap,delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(){}
checkusernameandpassword(uname:string, pwd: string)
{
  if(uname == "admin" && pwd == "admin"){
    localStorage.setItem('username',"admin");
    return true;
  }
  else{
    return false;
  }
}

}
// isUserLoggedIn : boolean = false;
// login(userName: string, password: string): Observable<any> {
//   console.log(userName);
//   console.log(password);
//   this.isUserLoggedIn = userName == 'admin' && password == 'admin';
//   localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

// return of(this.isUserLoggedIn).pipe(
//   delay(1000),
//   tap(val => { 
//      console.log("Is User Authentication is successful: " + val); 
//   })
// );
// }

// logout(): void {
// this.isUserLoggedIn = false;
//   localStorage.removeItem('isUserLoggedIn'); 
// }

//   constructor(private router: Router) { }

  // setToken(token:string): void{
  //   localStorage.setItem('token', token);
  // }
  // getToken(): string|null{
  //   return localStorage.getItem('token');
  // }
  // isUserLoggedIn(){
  //   return this.getToken() !== null;
  // }
  // logout(){
  //   localStorage.removeItem('token');
  //   this.router.navigate(['userlogin']);
  // }
  // login({username , password} : any): Observable<any>{
  //   if(username === 'admin' && password == 'admin'){
  //     this.setToken('xyz');
  //     return of({name: 'abc', email:'admin@gmail.com'});
  //   }
  //   return throwError(new Error('Failed to Login'))
  // }

