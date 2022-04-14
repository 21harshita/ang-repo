import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  inputText ={
    name: 'bruce',
    age: 40,
    email:'fdd@fd',
  }
  constructor() { }

  ngOnInit(): void {
  
  }
  receiveChildData(data){
    console.log(data);
    
  }
}
