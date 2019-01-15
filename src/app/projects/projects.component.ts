import { Component, OnInit } from '@angular/core';
import { path } from '../path';
import { ProjectService } from '../services/project/project.service';
import { Project } from '../project';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isLoadContent: boolean = true;
  path: string;
  cat:string;
  constructor(private _pro: ProjectService,private _common:CommonService) { }
  projects:Project[];
  categories;
  ngOnInit() {
    this.path = path;
    this._common.getCategory().subscribe((categories:any)=>{
      this.categories = new Set(categories.projectCategories);
    })
    this._pro.getProjectsSnaphot()
      .subscribe((resp:Project[]) => {
        this.projects = resp;
        for(let project of this.projects){
          project.url = this._pro.getImageUrlOfSingle(project.view3dImages[0],project.randomId);
        }
        this.isLoadContent = false;
      }, (err) => {
        console.log(err);
      })
  }
  filter(category){
    this.cat = category;
  }

}
