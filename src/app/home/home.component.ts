import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project/project.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoadContent: boolean = false;
  projects:any[];
  constructor(private _pro: ProjectService) { }

  ngOnInit() {
    this.isLoadContent = true;
    this._pro.getProjects()
      .subscribe((resp)=>{
        this.isLoadContent = false;
        this.projects = resp;
      },(err)=>{
        console.log(err);
      })
  }

}
