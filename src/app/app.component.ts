import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expense Manager';
  isUserLoggedIn = false;
  inputText ={
    name: 'bruce',
    age: 40,
    email:'fdd@fd',
  }
  // name="";
  // parentFunction(item)
  // {
  //   console.warn(item)
  //   this.name = item.name
  // }

  // inputText: string = 'Hi...have a nice day - message from parent';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    //  let storeData = localStorage.getItem("isUserLoggedIn");
    //  console.log("StoreData: " + storeData);

    //  if( storeData != null && storeData == "true")
    //     this.isUserLoggedIn = true;
    //  else


    //     this.isUserLoggedIn = false;
  }
  // receiveChildData(data){
  //   console.log(data);
    
  // }
}
