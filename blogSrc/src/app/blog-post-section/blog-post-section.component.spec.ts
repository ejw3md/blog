import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSectionComponent } from './blog-post-section.component';

describe('BlogPostSectionComponent', () => {
  let component: BlogPostSectionComponent;
  let fixture: ComponentFixture<BlogPostSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
