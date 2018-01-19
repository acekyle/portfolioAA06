import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ResumeComponent } from '../resume/resume.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
