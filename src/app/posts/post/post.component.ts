import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postId!: string;

  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.postId = id;
      }
    });
    this.data.getPost(this.postId).subscribe({
      next: data => {
        this.post = data as Post
      }
    })
  }
  

}
