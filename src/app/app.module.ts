import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KlantModule } from './modules/klant/klant.module';
import { BehandelingModule } from './modules/behandeling/behandeling.module';
import { IntakeModule } from './modules/intake/intake.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KlantModule,
    BehandelingModule,
    IntakeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
