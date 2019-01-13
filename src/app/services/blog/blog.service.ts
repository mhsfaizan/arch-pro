import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoginSignupService } from '../user/login-signup.service';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private _storage:AngularFireStorage,private _db:AngularFireDatabase,private _lg:LoginSignupService) { }
  async uploadBlog(blog){
    blog.date = Date.now();
    blog.blogDirId = this._db.createPushId();
    blog.userId = this._lg.getUser().uid;
    blog.img = blog.file.name;
    await this._storage.ref("blogs/"+blog.blogDirId+"/"+blog.file.name).put(blog.file);
    return this._db.list("blogs/").push(blog);
  }
  getBlogs():Observable<any[]>{
    return this._db.list("blogs",ref=>ref.orderByChild('blogDirId')).valueChanges();
  }
  getImage(img,id){
    return this._storage.ref("blogs/"+id+"/"+img).getDownloadURL();
  }
}
