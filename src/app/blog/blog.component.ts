import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog/blog.service';
import { Blog } from '../blog';
import { path } from '../path';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit,OnDestroy {
  blog:Blog;
  isLoadContent:boolean = true;
  constructor(private _router:ActivatedRoute,private _blog:BlogService,private _cd:ChangeDetectorRef) { }
  path:string;
  ngOnInit() {
    this.path = path;
    let blogid = this._router.snapshot.paramMap.get("id");
    this.getBlog().on('value',(snapshot)=>{
      let blogs = snapshot.val();
      for(let id in blogs){
        if(id===blogid){
          this.blog = blogs[id];
          this.blog.url = this._blog.getImage(this.blog.img,this.blog.blogDirId);
          this.isLoadContent = false;
          this._cd.detectChanges();
          break;
        }
      }
    })
  }
  getBlog(){
    return this._blog.getBlog();
  }
  ngOnDestroy(){
    this._cd.detach();
  }
}
