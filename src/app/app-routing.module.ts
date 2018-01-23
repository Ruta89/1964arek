import { PageNotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { DetailComponent } from './detail/detail.component';
import { PozycjeComponent } from './modules/pozycje/pozycje.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { FormlyComponent } from './modules/formly/formly.component';

const routes: Routes = [
  {
    path: 'formly',
    component: FormlyComponent
  },

  { path: 'table', component: TableComponent },
  {
    path: 'add',
    component: AddFormComponent
  },
  { path: 'detail/:id', component: DetailComponent },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'pozycje',
    component: PozycjeComponent
  },
  { path: '', redirectTo: 'pozycje', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    // console.log('constructor AppRoutingModule');
    //
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
