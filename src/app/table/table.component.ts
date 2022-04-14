import {
  Component,
  OnInit,
  OnDestroy,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { TableService } from "./table.service";
import { Router } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { DataTableDirective } from "angular-datatables";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnDestroy, OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  persons: Array<any> = [];
  dtTrigger: Subject<any> = new Subject<any>();
  userid: any;
  modalRef?: BsModalRef;
  message?: string;
  editProfileForm: FormGroup;
  submitted: boolean;
 

  constructor(
    private tableService: TableService,
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.editProfileForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required]],
      email: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      gender: ["", [Validators.required]],
    });

    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10,
    };

    this.getUser();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  get f() {
    return this.editProfileForm.controls;
  }

  getUser() {
    this.persons = this.tableService.array;

    setTimeout(() => {
      this.dtTrigger.next("");
    }, 200);
  }

  openModal(template: TemplateRef<any>, id) {
    this.modalRef = this.modalService.show(template, { class: "modal-sm" });
    this.userid = id;

    var index = this.persons.findIndex((element) => element.id == id);

    this.editProfileForm.patchValue({
      firstName: this.persons[index].firstName,
      lastName: this.persons[index].lastName,
      phoneNumber: this.persons[index].phoneNumber,
      email: this.persons[index].email,
      dob: this.persons[index].dob,
      gender: this.persons[index].gender,
    });
  }

  hideModal(): void {
    this.modalRef?.hide();
  }

  deleteUser(id): void {
    for (let i = 0; i < this.persons.length; i++) {
      if (this.persons[i].id === this.userid) {
        this.persons.splice(i, 1);
        this.rerender();
        this.modalRef?.hide();
      }
    }
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next("");
    });
  }

  editUser() {
    if (this.editProfileForm.valid) {
      var index = this.persons.findIndex(
        (element) => element.id == this.userid
      );

      this.persons[index] = { id: this.userid, ...this.editProfileForm.value };
      this.tableService.array = this.persons;

      this.modalRef?.hide();
      this.rerender();
    }
  }
  logout(){
    localStorage.removeItem('username')
  }
}
