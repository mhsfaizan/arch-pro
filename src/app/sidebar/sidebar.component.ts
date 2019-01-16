import { Component, OnInit, Input } from '@angular/core';
import { path } from '../path';
import { Blog } from '../blog';
import { Project } from '../project';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() contents;
  @Input() title;
  path:string;
  constructor(private _router:Router) { }
  blogs:Blog[];
  projects:Project[];
  ngOnInit() {
    this.path = path;
    if(this.title=="Blogs"){
      this.blogs = this.contents;
    }
    else if(this.title=="Similar Projects"){
      this.projects = this.contents;
    }    
  }
}
