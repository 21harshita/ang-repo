import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() inputFromParent;
  @Output() outputFromChild: EventEmitter<any>= new EventEmitter()
   outputText : string = "Hi ... message from child";
  constructor() { }

  ngOnInit(): void {
  //  console.log(this.inputFromParent);
   
  }
  SendDataToParent(){
    this.inputFromParent;
this.outputFromChild.emit(this.outputText);
  }
}
