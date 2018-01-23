import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MaterialModule } from './shared/material.module';
import { CzasService } from './shared/czas.service';
import { StepperComponent } from './stepper/stepper.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found.component';
import { HeaderComponent } from './header/header.component';
import { FormlyMojModule } from './modules/formly/formly.module';
import { PozycjeModule } from './modules/pozycje/pozycje.module';
import { HttpClientModule } from '@angular/common/http/src/module';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    TableComponent,
    DetailComponent,
    StepperComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFirestoreModule.enablePersistence(),
    // environment.production
    //   ? ServiceWorkerModule.register('/ngsw-worker.js')
    //   : [],
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    AppRoutingModule,
    HttpModule,
    PozycjeModule,
    FormlyMojModule
  ],
  providers: [CzasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
