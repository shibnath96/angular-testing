import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
//Components
import { FormsComponent } from '../../components/forms/forms.component';

const routes: Routes = [
  { path: 'login', component: FormsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutesModule { }
