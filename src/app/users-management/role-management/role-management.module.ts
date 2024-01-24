import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleManagementRoutingModule } from './role-management-routing.module';
import { RoleManagementComponent } from './role-management.component';
import { RoleService } from '../service/role.service';

@NgModule({
    declarations: [RoleManagementComponent],
    imports: [CommonModule, RoleManagementRoutingModule],
    providers: [RoleService],
})
export class RoleManagementModule {}
