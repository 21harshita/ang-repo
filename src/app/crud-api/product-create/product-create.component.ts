import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Route, Router } from "@angular/router";
import { ProductService } from "../product.service";
import { ActivatedRoute } from "@angular/router";
import { post } from "jquery";
import { Post } from "../post";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  // product = {
  //   name: '',
  //   description: '',
  //   available: false
  // };
  // submitted = false;

  form: FormGroup;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl("", [Validators.required]),
      body: new FormControl("", Validators.required),
    });
   
  }
  

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.productService.create(this.form.value).subscribe((res) => {
      console.log("Post created successfully!");
      this.router.navigateByUrl("crud-api/index");
    });
  }
}

//   createProduct(): void { 
//     const data = {
//       name: this.product.name,
//       description: this.product.description
//     };
//     if(!data.name){
//       alert('Please add title!');
//       return;
//     }

//     this.productService.create(data)
//       .subscribe(
//         response => {
//           console.log(response);
//           this.submitted = true;
//         },
//         error => {
//           console.log(error);
//         });
//   }

//   newProduct(): void {
//     this.submitted = false;
//     this.product = {
//       name: '',
//       description: '',
//       available: false
//     };
// }

// if (this.editProfileForm.valid) {
//   var index = this.persons.findIndex(
//     (element) => element.id == this.userid
//   );

//   this.persons[index] = { id: this.userid, ...this.editProfileForm.value };
//   this.tableService.array = this.persons;

//   this.modalRef?.hide();
//   this.rerender();
