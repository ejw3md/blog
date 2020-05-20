import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { BlogPostSectionComponent } from './blog-post-section/blog-post-section.component'
import { BlogPostViewComponent } from './blog-post-view/blog-post-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: BlogPostSectionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'blog-post/:id', component: BlogPostViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
