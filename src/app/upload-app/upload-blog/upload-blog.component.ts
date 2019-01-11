import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { categories } from 'src/app/ccategory';
@Component({
  selector: 'app-upload-blog',
  templateUrl: './upload-blog.component.html',
  styleUrls: ['./upload-blog.component.css']
})
export class UploadBlogComponent implements OnInit {
  blogForm:FormGroup;
  constructor() { }
  categories:string[];
  ngOnInit() {
    this.categories = categories
    this.init();
  }
  init(){
    this.blogForm = new FormGroup({
      title:new FormControl('',Validators.required),
      category:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required)
    })
  }
}
