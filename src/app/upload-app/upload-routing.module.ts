import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { UploadAppComponent } from './upload-app.component';
import { UploadProjectComponent } from './upload-project/upload-project.component';
import { UploadBlogComponent } from './upload-blog/upload-blog.component';
import { UploadThesisComponent } from './upload-thesis/upload-thesis.component';
import { UploadThesisReportComponent } from './upload-thesis-report/upload-thesis-report.component';
import { UploadThesisPortfolioComponent } from './upload-thesis-portfolio/upload-thesis-portfolio.component';
const routes: Routes = [
  {
    path: '',
    component: UploadAppComponent,
    children:[
      {path:'',redirectTo:"/upload/upload-project",pathMatch:'full'},
      { path:'upload-project',component:UploadProjectComponent},
      { path:'upload-blog',component:UploadBlogComponent},
      { path:'upload-thesis',component:UploadThesisComponent},
      { path:'upload-thesis-report',component:UploadThesisReportComponent},
      { path:'upload-portfolio',component:UploadThesisPortfolioComponent},
    ]
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class UploadRoutingModule { }
