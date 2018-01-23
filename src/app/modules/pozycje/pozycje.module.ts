import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './../../app-routing.module';
import { MaterialModule } from './../../shared/material.module';

import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import {
//   MatButtonModule,
//   MatIconModule,
//   MatCardModule,
//   MatGridListModule,
//   MatTableModule,
//   MatFormFieldModule,
//   MatInputModule
// } from '@angular/material';
import { CommonModule } from '@angular/common';
import { PozycjeComponent } from './pozycje.component';
import { AddPozycjeComponent } from './add-pozycje/add-pozycje.component';
import { DetailPozycjaComponent } from './detail-pozycja/detail-pozycja.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [PozycjeComponent, AddPozycjeComponent, DetailPozycjaComponent],
  exports: [PozycjeComponent]
})
export class PozycjeModule {}
