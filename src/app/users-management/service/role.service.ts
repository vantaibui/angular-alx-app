import { Injectable } from '@angular/core';
import { RoleAPIService } from 'src/apis/role-api/role.api';

@Injectable({
    providedIn: 'root',
})
export class RoleService {
    constructor(private _roleAPIService: RoleAPIService) {}
}
