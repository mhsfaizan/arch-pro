import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BlogService } from '../services/blog/blog.service';
import { Blog } from '../blog';
import { path } from '../path';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private _blog: BlogService,private _cd:ChangeDetectorRef) { }
  blogs: Blog[];
  path: string;
  isLoadContent: boolean = true;
  ngOnInit() {
    this.path = path;
    this.getBlogs();
    
  }
  getBlogs() {
    this._blog.getBlogs()
    .on('value', (snapshot) => {
      let blogs = snapshot.val();
      for (let blogid in blogs) {
        blogs[blogid].url = this._blog.getImage(blogs[blogid].img, blogs[blogid].blogDirId);
        blogs[blogid].blogId = blogid;
        if (this.blogs == undefined) {
          this.blogs = [];
        }
        this.blogs.push(blogs[blogid]);
      }
      //  this.blogs = blogs;
      this.blogs.sort((obj1, obj2) => {
        return obj2.date - obj1.date;
      })
      this.isLoadContent = false;
      this._cd.detectChanges();
      }, (err) => {
        console.log(err);
      })
  }
}
