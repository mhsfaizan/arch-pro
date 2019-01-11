import { Component, OnInit, Input } from '@angular/core';
import { path } from '../path';
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {
  path:string;
  constructor() { }
  @Input("projects") projects;
  ngOnInit() {
    this.path = path;
    // console.log(this.projects);
  }
  
}
