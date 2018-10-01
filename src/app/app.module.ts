import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';

import { RoutesModule } from './modules/routes/routes.module';
import { FormTesting } from './components/form-testing-custom/form-testing.component'

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    FormTesting
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
