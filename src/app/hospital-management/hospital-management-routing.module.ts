import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalManagementComponent } from './hospital-management.component';

const routes: Routes = [{ path: '', component: HospitalManagementComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HospitalManagementRoutingModule {}
