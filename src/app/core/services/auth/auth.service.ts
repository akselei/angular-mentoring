import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@features/auth/models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<IUser>;
    public currentUser: Observable<IUser>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<IUser>(
            JSON.parse(localStorage.getItem('currentUser'))
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    login(user: IUser) {
        return this.http.post<IUser>('/users/auth', user)
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

    logout() {
        localStorage.removeItem('currentUser');

        this.currentUserSubject.next(null);
    }
}
