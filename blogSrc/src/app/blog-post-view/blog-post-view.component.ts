import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogPostService } from '../blog-post.service'
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.css']
})
export class BlogPostViewComponent implements OnInit {

  blogPost: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private blogPostService: BlogPostService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBlogPost();
  }

  getBlogPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogPostService.getBlogPost(id)
      .subscribe(blogPost => this.blogPost = blogPost);
  }

}
