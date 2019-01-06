import { Component, OnInit, Sanitizer } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrls: ['./upload-project.component.css']
})
export class UploadProjectComponent implements OnInit {
  siteplanImages = [];
  floorplanImages = [];
  elevationplanImages = []
  uploadProject: FormGroup;
  sitePlan: FormGroup;
  floorPlan: FormGroup;
  elevationPlan:FormGroup;
  constructor(private _common: CommonService, private _sanitizer: DomSanitizer) { }
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
      floorplanDescription: new FormControl('', Validators.required)
    });
    this.elevationPlan = new FormGroup({
      elevationplanDescription:new FormControl('', Validators.required)
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
}
