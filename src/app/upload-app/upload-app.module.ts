import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadProjectComponent } from './upload-project/upload-project.component';
import { UploadRoutingModule } from './upload-routing.module';

@NgModule({
  declarations: [UploadProjectComponent],
  imports: [
    CommonModule,
    UploadRoutingModule
  ]
})
export class UploadAppModule { }
