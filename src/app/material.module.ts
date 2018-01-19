import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule,
         MatToolbarModule,
         MatInputModule,
         MatProgressSpinnerModule,
         MatFormFieldModule,
         MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule
  ],
})
export class MaterialModule { }
