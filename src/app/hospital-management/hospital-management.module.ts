import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalManagementRoutingModule } from './hospital-management-routing.module';
import { HospitalManagementComponent } from './hospital-management.component';
import { HospitalService } from './service/hospital.service';

@NgModule({
    declarations: [HospitalManagementComponent],
    imports: [CommonModule, HospitalManagementRoutingModule],
    providers: [HospitalService],
})
export class HospitalManagementModule {}
