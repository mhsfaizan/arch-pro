import { Component, OnInit, Input } from '@angular/core';
import { path } from '../path';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() blogs;
  path:string;
  constructor() { }

  ngOnInit() {
    this.path = path;
    console.log(this.blogs);
  }

}
