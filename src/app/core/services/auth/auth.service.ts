import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@features/auth/models/user.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<IUser>;
    public currentUser: Observable<IUser>;
    private keepAfterRouteChange = false;
    private subject = new Subject();

    baseUrl = 'http://localhost:3004';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<IUser>(
            JSON.parse(localStorage.getItem('currentUser'))
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    login(login: string, password: string) {
        return this.http.post<IUser>(this.baseUrl + '/auth/login', {login, password})
            .pipe(map(userData => {
                if (userData && userData.token) {
                    localStorage.setItem('currentUser', JSON.stringify(userData));
                    this.currentUserSubject.next(userData);
                }

                return userData;
            }));
    }

    public get currentUserValue(): IUser {
        return this.currentUserSubject.value;
    }

    isAuth(): boolean {
        const user = localStorage.getItem('currentUser');

        return Boolean(user);
    }

    error(message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }

    logout() {
        localStorage.removeItem('currentUser');

        this.currentUserSubject.next(null);
    }
}
