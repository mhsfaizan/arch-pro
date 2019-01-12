import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadProjectComponent } from './upload-project/upload-project.component';
import { UploadRoutingModule } from './upload-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { UploadAppComponent } from './upload-app.component';
/* ===============materail common module start==============*/
import { MaterialModuleModule } from '../material-module/material-module.module';
import { MatStepperModule } from '@angular/material/stepper';
import { UploadNavComponent } from './upload-nav/upload-nav.component';
import { UploadBlogComponent } from './upload-blog/upload-blog.component';
import { UploadThesisComponent } from './upload-thesis/upload-thesis.component';
import { UploadThesisReportComponent } from './upload-thesis-report/upload-thesis-report.component';
import { UploadThesisPortfolioComponent } from './upload-thesis-portfolio/upload-thesis-portfolio.component';

/* ===============materail common module end==============*/



@NgModule({
  declarations: [UploadProjectComponent, UploadAppComponent, UploadNavComponent, UploadBlogComponent, UploadThesisComponent, UploadThesisReportComponent, UploadThesisPortfolioComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MaterialModuleModule,
    MatStepperModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()

  ]
})
export class UploadAppModule { }
