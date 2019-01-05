import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrls: ['./upload-project.component.css']
})
export class UploadProjectComponent implements OnInit {

  constructor(private _common:CommonService) { }
  categories:string[];
  ngOnInit() {
    this._common.getCategory()
    .subscribe((resp:any)=>{
      this.categories = resp.projectCategories;
    },(err)=>{
      console.log(err)
    })
  }
  uploadProject = new FormGroup({
    name:new FormControl('',Validators.required),
    location:new FormControl('',Validators.required),
    institute:new FormControl('',Validators.required),
    area:new FormControl('',Validators.required),
    year:new FormControl('',Validators.required),
    type:new FormControl('',Validators.required),
  });
  sitePlan = new FormGroup({
    siteplandescription:new FormControl('',Validators.required)
  });
  floorPlan = new FormGroup({
    floorplanDescription:new FormControl('',Validators.required)
  });
}
