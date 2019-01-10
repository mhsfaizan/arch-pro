import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project/project.service';
import { Project } from '../project';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoadContent: boolean = true;
  projects: Project[];
  constructor(public _pro: ProjectService) { }

  ngOnInit() {
    this._pro.getProjects()
      .subscribe(async (projects: Project[]) => {
        if (projects.length > 0) {
          for (let project of projects) {
            project.url = await this._pro.getImageUrl(project.view3dImages[0],project.randomId);
          }
          this.projects = projects;
          this.projects.sort((a, b) => {
            return b.date - a.date;
          });
          this.isLoadContent = false;
        }
        else{
          this.isLoadContent = false;
        }
      }, (err) => {
        console.log(err);
        this.isLoadContent = false;
      })
  }
} 
