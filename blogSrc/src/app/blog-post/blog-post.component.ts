import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post'

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() blogPost: BlogPost;

  constructor() { }

  ngOnInit(): void {

  }

}
