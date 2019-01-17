import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { path } from '../path';
import { Blog } from '../blog';
import { Project } from '../project';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit,OnChanges {
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
  ngOnChanges(changes:SimpleChanges){
    if(this.projects){
      this.projects = changes.contents.currentValue;
    }
  }
}
