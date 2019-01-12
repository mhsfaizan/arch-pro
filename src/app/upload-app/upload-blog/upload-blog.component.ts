import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { categories } from 'src/app/ccategory';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from 'src/app/image';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload-blog',
  templateUrl: './upload-blog.component.html',
  styleUrls: ['./upload-blog.component.css']
})
export class UploadBlogComponent implements OnInit {
  blogForm: FormGroup;
  blogImage: Image;
  editor: any;
  isUploaded:boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver, private sanitizer: DomSanitizer, private _blog: BlogService,private _router:Router) { }

  onReady(editor) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  categories: string[];
  ngOnInit() {
    this.categories = categories
    this.init();
  }
  init() {
    this.blogForm = new FormGroup({
      title: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    })
  }
  getBlogImage(file) {
    let blog = {
      url: null,
      src: {}
    }
    blog.url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    blog.src = file;
    this.blogImage = blog;
    console.log(this.blogImage);
  }
  remove() {
    this.blogImage = null;
  }
  change(editor) {
    this.editor = editor;
  }
  submitBlog() {
    this.isUploaded = true;
    let { title, category, name } = this.blogForm.value;
    let file  = this.blogImage.src;
    let editor = this.editor;
    let blog = { title, category, name, file, editor }
    this._blog.uploadBlog(blog)
      .then((resp)=>{
        this.isUploaded = false;
        this._router.navigate(["/dashboard"])
        console.log(resp)
      },(err)=>{
        this.isUploaded = false;
        console.log(err);
      })
  }
}
