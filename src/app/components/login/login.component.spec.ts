import {
    it,
    inject,
    describe,
    beforeEachProviders,
    expect
} from '@angular/core/testing';
import {HTTP_PROVIDERS} from '@angular/http';
import {LoginComponent} from './login.component';
import {WebServices} from '../../services/web.services.ts';
describe('Login', () => {
    beforeEachProviders(() => [
        HTTP_PROVIDERS,
        LoginComponent,
        WebServices
    ]);
    it('should enter 2 and out 2', inject([LoginComponent], (app: LoginComponent) => {
        // Add real test here
        expect(2).toBe(2);
    }));
});