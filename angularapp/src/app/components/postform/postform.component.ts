import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {
  copyPost;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost:EventEmitter<Post> = new EventEmitter();

  

  // @Input() currentPost: Post;

  currentPost: Post;
  @Input("currentPost") set setCurrentPost(value:Post) {
    this.currentPost = value;
    this.copyPost = Object.assign({}, this.currentPost);
  }
  

  @Input() isEdit: boolean;


  constructor(private postService:PostService) { }

  ngOnInit() {
    // console.log(this.currentPost)
   
  }
  ngOnChanges() {
    console.log(this.currentPost)
    // this.originalPost = this.currentPost;
    
    
}
  addPost(title, body) {

    if (!title || !body) {
      alert('Please add post')
    } else{
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        this.newPost.emit(post);
      });     
    }

  }
  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post)
    })
  }
  dummyPost() {
   
    console.log(this.currentPost)
  }
  cancelPost() {
    this.currentPost = this.copyPost;
    console.log(this.currentPost)
  }
}
