import { Component, OnInit , Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers:[AuthService]
})
export class UserloginComponent implements OnInit {
   formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("admin"),
   });
  @Input() hero;
  userName: any;
  password: any;

  constructor(private authService : AuthService, private router : Router) { }
  msg;
  ngOnInit(): void {
  
  }
  check(uname:string , p:string)
  {
    var output = this.authService.checkusernameandpassword(uname,p);
    if(output == true)
    {
      this.router.navigate(['/table'])
    }
    else
    {
      this.msg = "Invalid Username or Password";
    }
  }
}
  //  if(this.authService.isUserLoggedIn()){
  //    this.router.navigate(['table'])
  //  }
  
//   onClickSubmit(data:any) {
//     this.userName = data.userName;
//     this.password = data.password;

//     console.log("Login page: " + this.userName);
//     console.log("Login page: " + this.password);

//     this.authService.login(this.userName, this.password)
//        .subscribe( data => { 
//           console.log("Is Login Success: " + data); 
    
//          if(data) this.router.navigate(['/table']); 
//     });

//     // if(this.formData.valid){
//     //   this.authService.login(this.formData.value).subscribe(
//     //     (result) =>{
//     //       console.log(result);
//     //       this.router.navigate(['/table'])
//     //     },
//     //     (err:Error) =>{
//     //       alert(err.message);
//     //     }
//     //   )
//     // }
//  }

