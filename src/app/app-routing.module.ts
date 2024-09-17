import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full' },
  { path:'app', component: HomePageComponent},
  { path:'about-page', component: AboutPageComponent},
  { path:'contact', component: ContactPageComponent},
  { path:'portfolio', component: PortfolioPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }