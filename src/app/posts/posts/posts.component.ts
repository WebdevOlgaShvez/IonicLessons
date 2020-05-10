import { Component, OnInit } from '@angular/core';

import {PostsService} from "./posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  posts;
  constructor(private postsService: PostsService) {
    postsService.getAllPosts().subscribe(value => this.posts = value);
  }

  ngOnInit() {}

}
