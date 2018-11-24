import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import {CoursesService} from './courses.service';
import{NewFormComponent} from './forms/form.component';
@NgModule({
  declarations: [
    AppComponent,CoursesComponent,NewFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
