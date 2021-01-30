import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postone',
  templateUrl: './postone.component.html',
  styleUrls: ['./postone.component.css']
})
export class PostoneComponent implements OnInit {
  post: Post;
  constructor(private route:ActivatedRoute,private postService:PostService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => this.post=post);
    
  }

}
