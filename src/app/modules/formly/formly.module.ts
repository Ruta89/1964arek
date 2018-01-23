import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyComponent } from './formly.component';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { MatCardModule, MatButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [FormlyComponent],
  exports: [
    FormlyComponent
  ]
})
export class FormlyMojModule { }
