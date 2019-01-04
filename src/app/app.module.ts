import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';




/*====== material module start==============*/
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule, MatIconModule, MatListModule, MatGridListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
/*====== material module start==============*/

/*====== firebase  module start==============*/
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database' ;
import { AngularFireAuthModule } from '@angular/fire/auth' ;
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
import { MySpinnerComponent } from './my-spinner/my-spinner.component';
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
    MySpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
