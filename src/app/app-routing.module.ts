import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'term-condition',component:TermConditionComponent},
  {path:'dashboard',canActivate:[AuthGuard],component:DashboardComponent},
  {path:'blog/:id',component:BlogComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'project/:id',component:ProjectComponent},
  {path:"upload",loadChildren:'./upload-app/upload-app.module#UploadAppModule',canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
