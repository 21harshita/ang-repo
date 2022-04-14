import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  constructor(private httpClient : HttpClient) { }
  getPosts(){
    return this.httpClient.get(this.url);
  }

}
