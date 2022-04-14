import { Injectable } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
 
@Injectable({
  providedIn: "root",
})
export class TableService {
  open(content: any, arg1: { centered: boolean; }) {
    throw new Error("Method not implemented.");
  }
  updateUser(value: any) {
    throw new Error("Method not implemented.");
  }
  message: string;
  modalRef: BsModalRef;
  dismissAll() {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }
  getUpdate(id: any) {
    throw new Error("Method not implemented.");
  }
  public array: any = [];

  constructor() {}


}
