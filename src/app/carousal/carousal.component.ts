import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../services/project/project.service';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {
  constructor(private _pro:ProjectService) { }
  @Input() projects;
  ngOnInit() {
    console.log(this.projects);
  }
  getImageUrl(image){
    return this._pro.getImageUrl(image)
  }
}
