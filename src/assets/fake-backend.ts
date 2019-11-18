import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in local storage for users
        const users: any[] = JSON.parse(localStorage.getItem('users')) || [];

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            if (request.url.endsWith('/users/auth') && request.method === 'POST') {
                const authData = request.body;

                const duplicateUser = users.filter(user => {
                    return  user.email === authData.email;
                });

                const fittedUser = users.filter(user => {
                    return  user.email === authData.email &&
                            user.password === authData.password;
                });

                if (duplicateUser.length && !fittedUser.length) {
                    return throwError({ error: { message: `User ${authData.email} exists` } });
                }

                if (fittedUser.length) {
                    const user = fittedUser[0];
                    const userData = {
                        id: user.id,
                        email: user.email,
                        token: user.token
                    };

                    return of(new HttpResponse({
                        status: 200, body: userData
                    }));
                }

                authData.id = users.length + 1;
                authData.token = Math.random().toString();
                users.push(authData);

                localStorage.setItem('users', JSON.stringify(users));

                return of(new HttpResponse({
                    status: 200,
                    body: authData
                }));
            }
            // pass through any requests not handled above
            return next.handle(request);

        }))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
