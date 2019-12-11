import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from '@features/auth/models/user.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    baseUrl = 'http://localhost:3004';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<IUser[]>(this.baseUrl + `/users`);
    }

    register(user: IUser) {
        return this.http.post(this.baseUrl + `/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl + `/users/${id}`);
    }
}
