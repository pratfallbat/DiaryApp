import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body:''
  };

  isEdit: boolean=false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    })
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }
  editPost(post: Post) {
    console.log(post)
    this.currentPost = post;
    this.isEdit = true;

  }
  deletePost(post: Post) {
    if (confirm('Are you Sure?')) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((curr,index) => {
          if (post.id == curr.id) {
             this.posts.splice(index, 1);
          }
        });  
      })
    }

   }
  onUpdatedPost(post: Post) {

    this.posts.forEach((curr,index) => {
      if (post.id == curr.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body:''
      }
      }
    });   
  }
}
