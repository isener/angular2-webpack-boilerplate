import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {enableProdMode} from '@angular/core';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {TranslateLoader, TranslateService, TranslateStaticLoader} from 'ng2-translate';


import {AppComponent} from './app/app.component';

if (process.env.ENV === 'production') enableProdMode();

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    {
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
    },
    TranslateService,
    APP_ROUTER_PROVIDERS
]);