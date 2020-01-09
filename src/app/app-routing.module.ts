import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UserComponent} from "./user/user.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ChronologicalAgeCalculatorComponent} from "./chronological-age-calculator/chronological-age-calculator.component";
import {CorrectedAgeCalculatorComponent} from "./corrected-age-calculator/corrected-age-calculator.component";
import {NeonatalWeightGainCalculatorComponent} from "./neonatal-weight-gain-calculator/neonatal-weight-gain-calculator.component";


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: UserComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'chronolocal-age', component: ChronologicalAgeCalculatorComponent},
  {path: 'corrected-age', component: CorrectedAgeCalculatorComponent},
  {path: 'neonatal-weight-gain', component: NeonatalWeightGainCalculatorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
