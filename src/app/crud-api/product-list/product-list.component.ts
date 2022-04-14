import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // products: any;
  // currentProduct = null;
  // currentIndex = -1;
  // name = '';

  id : number;
  post : Post;
  constructor(private productService : ProductService ,private route :ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    // this.readProducts();

    this.id = this.route.snapshot.params['postId'];
      
    this.productService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
  }
  }
//   readProducts(): void {
//     this.productService.readAll()
//       .subscribe(
//         products => {
//           this.products = products;
//           // console.log(products);
//         },
//         error => {
//           console.log(error);
//         });
//   }

//   refresh(): void {
//     this.readProducts();
//     this.currentProduct = null;
//     this.currentIndex = -1;
//   }

//   setCurrentProduct(product, index): void {
//     this.currentProduct = product;
//     this.currentIndex = index;
//   }

//   deleteAllProducts(): void {
//     this.productService.deleteAll()
//       .subscribe(
//         response => {
//           console.log(response);
//           this.readProducts();
//         },
//         error => {
//           console.log(error);
//         });
//   }

//   searchByName(): void {
//     this.productService.searchByName(this.name)
//       .subscribe(
//         products => {
//           this.products = products;
//           // console.log(products);
//         },
//         error => {
//           console.log(error);
//         });
//   }
// }
