import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service'
import { BlogPost } from '../blog-post'

@Component({
  selector: 'app-blog-post-section',
  templateUrl: './blog-post-section.component.html',
  styleUrls: ['./blog-post-section.component.css']
})
export class BlogPostSectionComponent implements OnInit {

  blogPosts: BlogPost[];

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts(): void {
    this.blogPostService.getBlogPosts().subscribe(blogPosts => this.blogPosts = blogPosts);
  }

}
