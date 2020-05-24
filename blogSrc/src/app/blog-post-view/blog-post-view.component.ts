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
  id: number;
  blogPostContent: string;

  constructor(
    private route: ActivatedRoute,
    private blogPostService: BlogPostService
  ) {}

  ngOnInit(): void {
    this.getId();
    this.getBlogPost();
    this.getBlogPostContent();
  }

  getId() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  getBlogPost(): void {
    this.blogPostService.getBlogPost(this.id)
      .subscribe(blogPost => this.blogPost = blogPost);
  }

  getBlogPostContent(): void {
    this.blogPostService.getBlogPostContent(this.id)
      .subscribe(blogPostContent => this.blogPostContent = blogPostContent);
  }

}
