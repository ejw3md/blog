import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BlogPost } from './blog-post'

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

private blogUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.blogUrl + '/blogPosts')
  }

  getBlogPost(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(this.blogUrl + '/blogPosts/' + id);
  }

  getBlogPostContent(id: number): Observable<string> {
    return this.http.get<string>(this.blogUrl + '/blogPostContent/' + id);
  }
}
