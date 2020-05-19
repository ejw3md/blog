import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post'

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  
  blogPost : BlogPost = {
    title: "test",
    date: "5/19/2020",
    contentPath: "",
    photoPath: "assets/img/logo_temp.png",
    primaryContent: "This is a test post in order to display the functionaility of the blogpost module and I wanted to see how long I could make this string in order to asldfjalk;jsdf",
  }

  constructor() { }

  ngOnInit(): void {

  }

}
