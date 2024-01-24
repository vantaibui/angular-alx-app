import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetoxCourseManagementRoutingModule } from './detox-course-management-routing.module';
import { DetoxCourseManagementComponent } from './detox-course-management.component';
import { DetoxCourseService } from './service/detox-course.service';

@NgModule({
    declarations: [DetoxCourseManagementComponent],
    imports: [CommonModule, DetoxCourseManagementRoutingModule],
    providers: [DetoxCourseService],
})
export class DetoxCourseManagementModule {}
