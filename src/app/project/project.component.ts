import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/project/project.service';
import { Project } from '../project';
import { path } from '../path';
import { Lightbox } from 'ngx-lightbox';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project;
  path: string;
  isLoadContent: boolean = true;
  similarProjects: Project[];
  constructor(private _router: Router, private _lightbox: Lightbox, private _activatedRoute: ActivatedRoute, private _pro: ProjectService) { }
  ngOnInit() {
    this.path = path;
    this._activatedRoute.paramMap.subscribe((param) => {
      let projectId = param.get("id");
      this._pro.getProjectsSnaphot().subscribe((projects: Project[]) => {
        this.isLoadContent = false;
        for (let project of projects) {
          if (project.projectId == projectId) {
            this.project = project;
            break;
          }
        }
        this.project.url = this._pro.getImageUrlOfSingle(this.project.view3dImages[0], this.project.randomId);
        this.project.urls = [...this.project.view3dImages, ...this.project.sectionImages, ...this.project.elevationimages, ...this.project.floorPlanimages, ...this.project.siteplanImages];
        for (let i in this.project.urls) {
          this.project.urls[i] = this._pro.getImageUrlOfSingle(this.project.urls[i], this.project.randomId);
        }
        this.getSimilarProject(this.project.type, this.project.projectId);
      });
    })

  }
  getSimilarProject(type: string, projectId: string) {
    this._pro.getSimilarProject(type).subscribe((similarProjects: Project[]) => {
      this.similarProjects = similarProjects.filter(o => {
        if (o.projectId != projectId) {
          return o;
        }
      });
      this.similarProjects = this.similarProjects.map(o => {
        o.url = this._pro.getImageUrlOfSingle(o.view3dImages[0], o.randomId);
        return o;
      })
    })
  }
  open(index: number) {
    let albums = [];
    forkJoin(this.project.urls).subscribe((images) => {
      for (let image of images) {
        albums.push({
          src: image
        })
      }
    })
    this._lightbox.open(albums, index, { showImageNumberLabel: true });
  }
}
