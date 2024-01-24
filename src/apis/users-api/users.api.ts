import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/models/user/user.model';

@Injectable({ providedIn: 'root' })
export class UserAPIService {
    constructor(private _httpClient: HttpClient) {}

    signIn({ email, password }: User): Observable<User> {
        const userLogin = { email, password };
        return this._httpClient.post<User>(`${'TES'}/login`, userLogin);
    }
}
