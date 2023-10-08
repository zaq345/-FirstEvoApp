import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../interfaces/post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  constructor(private data: DataService) { }
  posts: Post[] = [];
  ngOnInit(): void {
    this.data.getPosts().subscribe({
      next: data => {
        this.posts = data as Post[];
      }
    })
  }

}
