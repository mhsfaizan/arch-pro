import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LightboxModule } from 'ngx-lightbox';
 

/* ===============materail common module start==============*/
import { MaterialModuleModule } from './material-module/material-module.module';
/* ===============materail common module end==============*/




/*====== firebase  module start==============*/
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database' ;
import { AngularFireAuthModule } from '@angular/fire/auth' ;
import { AngularFireStorageModule } from '@angular/fire/storage' ;
/*====== firebase  module end==============*/



/*====== component start==============*/
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarousalComponent } from './carousal/carousal.component';
import { LoginComponent } from './login/login.component';
import { CarousalDirective } from './carousal.directive';
import { SignupComponent } from './signup/signup.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { FilterPipe } from './filter.pipe';
/*====== component end==============*/


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CarousalComponent,
    LoginComponent,
    CarousalDirective,
    SignupComponent,
    TermConditionComponent,
    DashboardComponent,
    BlogsComponent,
    SidebarComponent,
    BlogComponent,
    ProjectsComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
