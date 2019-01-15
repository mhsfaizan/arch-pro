import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(projects: Project[],arg:string): any {
    if(arg){
      return projects.filter(project=>{
        if(project.type == arg){
          return project;
        }
      });
    }
    else{
      return projects;
    }
  }

}
