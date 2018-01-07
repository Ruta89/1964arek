import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MaterialModule } from './material.module';
import { CzasService } from './czas.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFirestoreModule.enablePersistence(),
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [CzasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
