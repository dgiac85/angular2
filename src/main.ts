//in main.ts vengono presentate le dipendenze principali
//@angular è una cartella di sistema

//platform-browser-dynamic contiene funzionalità specifiche
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
//l'avvio dell'applicazione Angular avviene semplicemente invocando
//il metodo bootstrap sul root dell'applicazione. In questo caso App Component
