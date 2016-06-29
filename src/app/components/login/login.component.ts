import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {TranslatePipe, TranslateService} from 'ng2-translate';

import {WebServices} from '../../services/web.services.ts';

import {LoaderComponent} from '../../directives/loader.directive.ts';

@Component({
    template: require('./login.component.html'),
    directives: [ROUTER_DIRECTIVES, LoaderComponent],
    providers: [WebServices],
    pipes: [TranslatePipe]
})
export class LoginComponent implements OnInit {

    private lists: any;
    private isLoading: boolean = true;

    constructor(
        private webServices: WebServices,
        private translate: TranslateService) { }

    ngOnInit() {
        this.getList();
    }

    changeLang() {
        this.translate.use('en-US');
    }

    private getList() {
        this.webServices.getList()
            .subscribe(
            (res) => {
                this.lists = res;
                this.isLoading = false;
                console.log(this.lists);
            },
            (err) => console.log('hata!')
            )
    }
}