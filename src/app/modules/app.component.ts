import { Component, OnInit } from '@angular/core';  
import { PostService } from '../core/services/post.service';  



@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit { 
  title = 'Sample Component'
  posts: any[];  
  
  constructor(private service:PostService) {  
  }  
  
  ngOnInit() {  
    this.service.getPosts()  
      .subscribe(response => {  
        this.posts = response.json();  
      });  
  }  
  
  createPost(input: HTMLInputElement) {  
    let post = { title: input.value };  
    input.value = '';  
  
    this.service.createPost(post)  
      .subscribe(response => {  
        post['id'] = response.json().id;  
        this.posts.splice(0, 0, post);  
        console.log(response.json());  
      });  
  }  
  
  updatePost(post) {  
    this.service.updatePost(post)  
      .subscribe(response => {  
        console.log(response.json());  
        alert('Post Updated')
      });  
  }  
  
  deletePost(post) {  
    this.service.deletePost(post.id)  
      .subscribe(response => {  
        let index = this.posts.indexOf(post);  
        this.posts.splice(index, 1);  
        alert('Post Deleted')
      });  
  }  
}





  
  
