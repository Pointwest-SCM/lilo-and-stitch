import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandProfileComponent } from './brand-profile/brand-profile.component';
import { BusinessCardComponent } from './business-card/business-card.component';

const routes: Routes = [
  { path: 'profile', component: BrandProfileComponent,
     children: [
      { path: 'business-card', component: BusinessCardComponent }
  ] },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: '**', redirectTo: '/profile', pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
