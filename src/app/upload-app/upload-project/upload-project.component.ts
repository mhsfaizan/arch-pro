import { Component, OnInit, Sanitizer } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ProjectService } from 'src/app/services/project/project.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrls: ['./upload-project.component.css']
})
export class UploadProjectComponent implements OnInit {
  isUploaded:boolean = false;
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
  // know breakpoint 
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  

  // submit:FormGroup;
  constructor(private _pro:ProjectService,private _common: CommonService, private _sanitizer: DomSanitizer,private _router:Router,private breakpointObserver: BreakpointObserver) { }
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



  // submit the whole Project  data
  submitProject(){
    this.isUploaded = true; 
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
    
    this._pro.uploadProject(obj).then((resp)=>{
      console.log(resp);
      this._router.navigate(["/dashboard"]);
      this.isUploaded = false;
    },(err)=>{
      this.isUploaded = false;
      console.log(err);
    })
  }
}
