import { Component, OnInit, Sanitizer } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrls: ['./upload-project.component.css']
})
export class UploadProjectComponent implements OnInit {
  isLoad:boolean = false;
  siteplanImages = [];
  floorplanImages = [];
  elevationplanImages = []
  sectionplanImages = []
  view3dImages = []
  uploadProject: FormGroup;
  sitePlan: FormGroup;
  floorPlan: FormGroup;
  elevationPlan:FormGroup;
  sectionPlan:FormGroup;
  view3d:FormGroup;
  // submit:FormGroup;
  constructor(private _pro:ProjectService,private _common: CommonService, private _sanitizer: DomSanitizer) { }
  categories: string[];
  ngOnInit() {
    this._common.getCategory()
      .subscribe((resp: any) => {
        this.categories = resp.projectCategories;
      }, (err) => {
        console.log(err)
      })

    this.init();
  }
  init() {
    this.uploadProject = new FormGroup({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      institute: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
    this.sitePlan = new FormGroup({
      siteplandescription: new FormControl('')
    });
    this.floorPlan = new FormGroup({
      floorplanDescription: new FormControl('')
    });
    this.elevationPlan = new FormGroup({
      elevationplanDescription:new FormControl('')
    })
    this.sectionPlan = new FormGroup({
      sectionplanDescription: new FormControl('')
    })
    this.view3d = new FormGroup({
      view3dDescription:new FormControl('')
    })
    // this.submit = new FormGroup({})
  }
  add(files,images) {
    for (let file of files) {
      images.push({
        url: this._sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file)),
        src: file
      })
    }
  }
  removeImage(images,index){
    images.splice(index,1);
  }



  // submit the whole data
  submitProject(){
    this.isLoad = true; 
    let obj = {uploadProject:{},sectionPlan:{},elevationPlan:{},view3d:{},floorPlan:{},sitePlan:{},sectionplanImages:{},elevationimages:{},siteplanImages:{},floorplanImages:{},view3dImages:{}};
    obj.uploadProject = this.uploadProject.value;
    obj.sectionPlan = this.sectionPlan.value;
    obj.elevationPlan = this.elevationPlan.value;
    obj.view3d = this.view3d.value;
    obj.floorPlan = this.floorPlan.value;
    obj.sitePlan = this.sitePlan.value;
    obj.sectionplanImages = this.sectionplanImages;
    obj.elevationimages = this.elevationplanImages;
    obj.siteplanImages = this.siteplanImages;
    obj.floorplanImages = this.floorplanImages;
    obj.view3dImages = this.view3dImages;
    // console.log("upload project = ",this.uploadProject.value);
    // console.log("sectionplan = ",this.sectionPlan.value);
    // console.log("elevation = ",this.elevationPlan.value);
    // console.log("view3d = ",this.view3d.value);
    // console.log("floor = ",this.floorPlan.value);
    // console.log("site = ",this.sitePlan.value);
    // console.log("sectiopnimages",this.sectionplanImages)
    // console.log("elevationimages",this.elevationplanImages)
    // console.log("siteplanimages",this.siteplanImages)
    // console.log("floorimages",this.floorplanImages)
    // console.log("viewimages",this.view3dImages)
    this._pro.uploadProject(obj).then((resp)=>{
      this._pro.uploadProjectFinally(resp).
      then((res)=>{
        console.log(res);
        this.isLoad = false;
      },(err)=>{
        this.isLoad = false;
        console.log(err);
      })
    },(err)=>{
      this.isLoad = false;
      console.log(err);
    })
  }
}
