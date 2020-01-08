import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { NeonatalWeightGainCalculatorComponent } from './neonatal-weight-gain-calculator/neonatal-weight-gain-calculator.component';
import { ChronologicalAgeCalculatorComponent } from './chronological-age-calculator/chronological-age-calculator.component';
import { CorrectedAgeCalculatorComponent } from './corrected-age-calculator/corrected-age-calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserComponent,
    NeonatalWeightGainCalculatorComponent,
    ChronologicalAgeCalculatorComponent,
    CorrectedAgeCalculatorComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
