import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'
import { UploadProjectComponent } from './upload-project/upload-project.component';
const routes:Routes = [
  {path:'',redirectTo:"/upload-project",pathMatch:'full'},
  {path:'upload-project',component:UploadProjectComponent}
]
@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class UploadRoutingModule { }
