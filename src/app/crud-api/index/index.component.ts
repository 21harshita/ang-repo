import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { post } from 'jquery';
import { Post } from '../post';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  posts: Post[];

  constructor(public productService: ProductService , private router: Router) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data)=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
  
  
  editUser(id: number): void {
     this.router.navigate(['/product-details',id]);
  };

  deletePost(id:number){
    this.productService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
  }


