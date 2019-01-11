import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project/project.service';
import { Project } from '../project';
import { forkJoin } from 'rxjs';
import { path } from '../path';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoadContent: boolean = true;
  projects: Project[];
  path:string;
  constructor(public _pro: ProjectService) {  }

  ngOnInit() {
    this.path = path;
    this._pro.getProjects()
      .subscribe((projects: Project[]) => {
        if (projects.length > 0) {
          for (let project of projects) {
            project.url = this._pro.getImageUrlOfSingle(project.view3dImages[0], project.randomId);
          }
          this.projects = projects;
          this.projects.sort((a, b) => {
            return b.date - a.date;
          });
          this.isLoadContent = false;

          // add urls
          for(let project of projects){
            project.urls = [...project.view3dImages,...project.sectionImages,...project.elevationimages,...project.floorPlanimages,...project.siteplanImages];
            for(let i in project.urls){
              project.urls[i] = this._pro.getImageUrlOfSingle(project.urls[i],project.randomId);
            }
            forkJoin(project.urls);
          }
        }
        else {
          this.isLoadContent = false;
        }
      }, (err) => {
        console.log(err);
        this.isLoadContent = false;
      })
  }
} 
