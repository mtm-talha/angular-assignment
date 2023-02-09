import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { PricingComponent } from './pricing/pricing.component'
import { SolutionComponent } from './solution/solution.component'
import { FeaturesComponent } from './features/features.component'
import { CompaniesComponent } from './companies/companies.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'companies', component: CompaniesComponent },
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
