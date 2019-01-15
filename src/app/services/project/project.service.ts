import { Injectable } from '@angular/core';
import { LoginSignupService } from '../user/login-signup.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private _storage: AngularFireStorage, private _lg: LoginSignupService, private _db: AngularFireDatabase) {
  }
  async uploadProject(obj) {
    let randomId = this._db.createPushId();
    let { uid } = this._lg.getUser();
    let { area, institute, location, name, type, year } = obj.uploadProject;
    let { elevationplanDescription } = obj.elevationPlan;
    let { sectionplanDescription } = obj.sectionPlan;
    let { view3dDescription } = obj.view3d;
    let { floorplanDescription } = obj.floorPlan;
    let { siteplandescription } = obj.sitePlan;
    let sectionImages = await this.iterator(obj.sectionplanImages,randomId);
    let elevationimages = await this.iterator(obj.elevationimages,randomId);
    // console.log(elevationimages);
    let siteplanImages = await this.iterator(obj.siteplanImages,randomId);
    // console.log(siteplanImages);
    let floorPlanimages = await this.iterator(obj.floorplanImages,randomId);
    // console.log(floorPlanimages);
    let view3dImages = await this.iterator(obj.view3dImages,randomId);
    // console.log(view3dImages);
    let date = Date.now();
    let project = { area, institute, location, name, type, year, elevationplanDescription, view3dDescription, sectionplanDescription, floorplanDescription, siteplandescription, sectionImages, elevationimages, siteplanImages, floorPlanimages, view3dImages, uid ,date,randomId};
    return this._db.database.ref("projects").push(project);
  }
  async iterator(images,randomId) {
    let imgarr = [];
    for (let image of images) {
      imgarr.push(image.src.name);
      await this._storage.storage.ref("projects").child(randomId+"/"+image.src.name).put(image.src);
    }
    return imgarr;
  }
  // upload image
  async uploadImage(files) {
    let images = [];
    for (let file of files) {
      await this._storage.storage.ref().child("projects/" + file.name).put(file);
      images.push(file.name);
    }
    return images;
  }
  getProjects(){
    return this._db.list("projects",ref=>ref.orderByChild('date')).valueChanges();
  }
  getProjectsSnaphot(){
    return this._db.list("/projects",ref=>ref.orderByChild('date')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const projectId = a.payload.key;
          const data = a.payload.val();
          return {projectId,...data};
        });
      }));
  }
  getImageUrl(image:string,id){
    return this._storage.storage.ref("projects/"+id+"/"+image).getDownloadURL();
  }
  getImageUrlOfSingle(image:string,id){
    return this._storage.ref("projects/"+id+"/"+image).getDownloadURL();
  }
}

