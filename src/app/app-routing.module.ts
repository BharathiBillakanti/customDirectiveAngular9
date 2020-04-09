import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'careers', component: CareersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
