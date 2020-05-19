import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPost } from './blog-post'


@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  blogPosts : BlogPost[] = [{
    title: "test",
    date: "5/19/2020",
    contentPath: "",
    photoPath: "assets/img/logo_temp.png",
    primaryContent: "This is a test post in order to display the functionaility of the blogpost module and I wanted to see how long I could make this string in order to asldfjalk;jsdf",
  },
{
    title: "test2",
    date: "5/20/2020",
    contentPath: "",
    photoPath: "assets/img/logo_temp.png",
    primaryContent: "This is a another test post in order to display the functionaility of the blogpost module and I wanted to see how long I could make this string in order to asldfjalk;jsdf",
}]
  constructor() { }

  getBlogPosts(): Observable<BlogPost[]> {
    return of(this.blogPosts);
  }
}
