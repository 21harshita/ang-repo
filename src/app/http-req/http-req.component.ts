import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-http-req',
  templateUrl: './http-req.component.html',
  styleUrls: ['./http-req.component.css']
})
export class HttpReqComponent implements OnInit {
  posts: Object;
  users: Object;

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(response =>{
      this.posts = response
    })

  }}
