import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {TranslatePipe, TranslateService} from 'ng2-translate';

import '../assets/css/style.css';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class AppComponent {

    constructor(private translate: TranslateService){
        translate.setDefaultLang('tr-TR'); 
        translate.use('tr-TR');
    } 

}