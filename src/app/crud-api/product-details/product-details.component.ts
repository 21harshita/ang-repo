import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute,Router } from '@angular/router'; 
import { Post } from '../post';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { data, error } from 'jquery';
import { first } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // currentProduct: any;
  // message: any;

  id: any;
  post : Post;
  form: FormGroup;
  activeindex: number;

  constructor(private productService: ProductService, private route : ActivatedRoute, private router: Router , private formBuilder: FormBuilder) { }
 //   this.message = '';
  //   this.getProduct(this.route.snapshot.paramMap.get('id'));

  //  this.route.snapshot.params['postId'];
  //   this.productService.find(this.id).subscribe((data: Post)=>{
  //     this.post = data;
  //   });
  
 
  // this.route.params.subscribe(data =>{
  //   this.id = data.id; 
  // });
  //   if(this.id !=='')  {
  //     this.productService.find(this.id)
  //     .toPromise()
  //     .then(data =>{
  //      this.post = data;
  //      Object.assign(this.post , data) ;
  //      console.log(this.post);
  //     })
  //   }
ngOnInit(): void {
 
  this.id = this.route.snapshot.params['postId'];
      
  this.productService.find(this.id).subscribe((data: Post)=>{
    this.post = data;
 
  this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  })
}
submit(){
{
  if(this.activeindex == -1){
    this.productService.create(this.post).subscribe(data =>{
      this.getUser();
    })
  }
  else{
    this.productService.update(this.post)
    .subscribe(
      data => {
          this.getUser();
    })
  }
}

  
  }
  getUser() {
    throw new Error('Method not implemented.');
  }
}
  
  // this.productService.update(this.form.value)


  //   this.route.paramMap.subscribe(params =>{
  //     const empId = +params.get('id');
  //     if(empId){
  //       this.getUser(empId);
  //     }
  //   })
  // }
  // getUser(id:number){
  //   this.productService.getUserById(id).subscribe(
  //     (post:Post)=> this.edit(post),
  //     (err:any )=> console.log(err)
  //   );
  // }
  // edit(post:Post){
  //   this.form.patchValue({
  //     title : post.title,
  //     body : post.body
  //   })
  // }
  
  //   // console.log(this.form.value);
  //   // this.productService.update(this.id, this.form.value).subscribe(res => {
  //   //      console.log('Post updated successfully!');
  //   //      this.router.navigateByUrl('post/index');
  //   // })
  //   submit(){
  //   this.productService.update(this.form.value)
  //   // .pipe(first())
  //   .subscribe(
  //     data => {
  //       if( data.status == 200){
  //         alert('User updated successfully.');
  //         this.router.navigate(['/product-create']);
  //       }else{
  //         alert(data.message);
  //       }
  //     }
  //   )
  // }
  // getProduct(id): void {
  //   this.productService.read(id)
  //     .subscribe(
  //       (product: null) => {
  //         this.currentProduct = product;
  //         console.log(product);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // setAvailableStatus(status): void {
  //   const data = {
  //     name: this.currentProduct.name,
  //     description: this.currentProduct.description,
  //     available: status
  //   };

  //   this.productService.update(this.currentProduct.id, data)
  //     .subscribe(
  //       response => {
  //         this.currentProduct.available = status;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // updateProduct(): void {
  //   this.productService.update(this.currentProduct.id, this.currentProduct)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.message = 'The product was updated!';
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // deleteProduct(): void {
  //   this.productService.delete(this.currentProduct.id)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.router.navigate(['/products']);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  
  // get f(){
  //   return this.form.controls;
  // }
   

  // update(value : any){
  //   let content ={
  //     title : value.title,
  //     body : value.body
  //   }
  //   this.productService.update(content , 'rgrg')
  //   .subscribe(response =>{
  //     console.log(response)
  //   })
  // }



