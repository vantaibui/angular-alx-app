import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UsersService } from '../service/users.service';

@NgModule({
    declarations: [UserManagementComponent],
    imports: [CommonModule, UserManagementRoutingModule],
    providers: [UsersService],
})
export class UserManagementModule {}
