import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApidataService } from './apidata.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { PortnavComponent } from './portnav/portnav.component';
import { PortfootComponent } from './portfoot/portfoot.component';

import * as $ from 'jquery';
import * as bootstrap from "bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    PortnavComponent,
    PortfootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApidataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
