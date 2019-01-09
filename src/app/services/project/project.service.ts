import { Injectable } from '@angular/core';
import { LoginSignupService } from '../user/login-signup.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private _storage: AngularFireStorage, private _lg: LoginSignupService, private _db: AngularFireDatabase) {
   }
  uploadProject(obj) {
    let { uid } = this._lg.getUser();
    let { area, institute, location, name, type, year } = obj.uploadProject;
    let { elevationplanDescription } = obj.elevationPlan;
    let { sectionplanDescription } = obj.sectionPlan;
    let { view3dDescription } = obj.view3d;
    let { floorplanDescription } = obj.floorPlan;
    let { siteplandescription } = obj.sitePlan;
    let sectionImages = this.iterator(obj.sectionplanImages);
    let elevationimages = this.iterator(obj.elevationimages);
    // console.log(elevationimages);
    let siteplanImages = this.iterator(obj.siteplanImages);
    // console.log(siteplanImages);
    let floorPlanimages = this.iterator(obj.floorplanImages);
    // console.log(floorPlanimages);
    let view3dImages = this.iterator(obj.view3dImages);
    // console.log(view3dImages);
    let date = Date.now();
    let project = { area, institute, location, name, type, year, elevationplanDescription, view3dDescription, sectionplanDescription, floorplanDescription, siteplandescription, sectionImages, elevationimages, siteplanImages, floorPlanimages, view3dImages, uid ,date};
    return this._db.database.ref("projects").push(project);
  }
  iterator(images) {
    let imgarr = [];
    for (let image of images) {
      imgarr.push(image.src.name);
      // this._storage.storage.ref().child("projects/"+image.src.name).put(image.src);
    }
    return imgarr;
  }
  // uploadProjectFinally(obj){

  // }
  async uploadImage(files) {
    for (let file of files) {
      await this._storage.storage.ref().child("projects/" + file.name).put(file);
    }
  }
  getProjects(){
    return this._db.list("projects",ref=>ref.orderByChild('date')).valueChanges();
  }
  getImageUrl(image:string){
    return this._storage.storage.ref("projects/"+image).getDownloadURL();
  }
  getImageUrlOfSingle(image:string){
    return this._storage.ref("projects/"+image).getDownloadURL();
  }
}

