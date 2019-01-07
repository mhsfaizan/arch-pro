import { Injectable } from '@angular/core';
import { LoginSignupService } from '../user/login-signup.service';
import {AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private _storage:AngularFireStorage,private _lg:LoginSignupService,private _db:AngularFireDatabase) { }
  async uploadProject(obj){
    // console.log(obj);
    let {uid} = this._lg.getUser();
    let {area,institute,location,name,type,year} = obj.uploadProject;
    let {elevationplanDescription} = obj.elevationPlan;
    let {sectionplanDescription} = obj.sectionPlan;
    let {view3dDescription} = obj.view3d;
    let {floorplanDescription} = obj.floorPlan;
    let {siteplandescription} = obj.sitePlan;
    // objectto be push
    let sectionImages = await this.iterator(obj.sectionplanImages);
    console.log(sectionImages);
    let elevationimages = await this.iterator(obj.elevationimages);
    console.log(elevationimages);
    let siteplanImages = await this.iterator(obj.siteplanImages);
    console.log(siteplanImages);
    let floorPlanimages = await this.iterator(obj.floorplanImages);
    console.log(floorPlanimages);
    let view3dImages = await this.iterator(obj.view3dImages);
    console.log(view3dImages);
    let project = {area,institute,location,name,type,year,elevationplanDescription,view3dDescription,sectionplanDescription,floorplanDescription,siteplandescription,sectionImages,elevationimages,siteplanImages,floorPlanimages,view3dImages,uid};
    return project;
  }
  async iterator(images){
    let imgarr = [];
    for(let image of images){
      imgarr.push(image.src.name);
      await this._storage.storage.ref().child("projects/"+image.src.name).put(image.src);
    }
    return imgarr;
  }
  uploadProjectFinally(obj){
    return this._db.database.ref("projects").push(obj); 
  }
}

