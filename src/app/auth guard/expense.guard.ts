import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot } from '@angular/router';
// import { url } from 'inspector';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

constructor(private authService : AuthService, private router:Router){}

  canActivate()
  {

  console.log('this one ')

    if(localStorage.getItem('username')!= null)
    { 
      // console.log('this one ')
      
      return true;}
    else{
      // console.log('this one ')
      this.router.navigate(['/userlogin'])
        return false;    }

    }}
    //   let url: string = state.url
    // return this.checkLogin(url);}
  
      // if(!this.authService.isUserLoggedIn()){
      //   this.router.navigate(['/userlogin']);
       
      // }
      // return this.authService.isUserLoggedIn();
    
  //    
  // checkLogin(url):true| UrlTree{
  //   console.log("Url:" + url)
  //   let val: string = localStorage.getItem('isUserLoggedIn');

    // if(val != null && val == "true"){
    //    if(url == "/login")
    //       this.router.parseUrl('/table');
    //    else 
    //       return true;
    // } else {
    //    return this.router.parseUrl('/userlogin');
    // }

  //   if(localStorage.getItem('userName')!= null)
  //   {return true ; }
  //   else{
  //     this.router.navigate(['/userlogin'])  ;
  //     return false;
  //   }
  // }

