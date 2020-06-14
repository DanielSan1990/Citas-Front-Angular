import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { initL10n, l10nConfig } from "./config/l10n-config";
import {
  L10nLoader,
  L10nIntlModule,
  L10nTranslationModule,
} from "angular-l10n";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CitaComponent } from './pages/cita/cita.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutsComponent,
    HeaderComponent,
    CitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    L10nTranslationModule.forRoot(l10nConfig),
    L10nIntlModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initL10n,
      deps: [L10nLoader],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
