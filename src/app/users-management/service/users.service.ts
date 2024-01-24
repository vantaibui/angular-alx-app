import { Injectable } from '@angular/core';
import { UserAPIService } from 'src/apis/users-api/users.api';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private _usersAPIService: UserAPIService) {}
}
