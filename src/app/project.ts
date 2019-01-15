import { Observable } from 'rxjs';

export interface Project {
    projectId:string;
    area:string;
    elevationimages:string[];
    elevationplanDescription:string;
    floorPlanimages:string[];
    floorplanDescription:string;
    institute:string;
    location:string;    
    name:string;
    sectionImages:string[];
    sectionplanDescription:string;
    siteplanImages:string[];
    siteplandescription:string;
    type:string;
    uid:string;
    view3dDescription:string;
    view3dImages:string[];
    year:number;
    url:Observable<any>;
    date:number;
    urls:any[];
    randomId:string;
}
