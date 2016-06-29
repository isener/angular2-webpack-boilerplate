import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import {UrlLibrary} from '../constants/web.urls.ts';

@Injectable()
export class WebServices {

    constructor(private http: Http) { }

    getList(): Observable<any> {
        return this.http.get(UrlLibrary.LIST_URL)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addHero(name: string): Observable<any> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(UrlLibrary.LIST_URL, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(err: any) {
        return Observable.throw(err);
    }
}