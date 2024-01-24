import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetoxCourseManagementComponent } from './detox-course-management.component';

describe('DetoxCourseManagementComponent', () => {
    let component: DetoxCourseManagementComponent;
    let fixture: ComponentFixture<DetoxCourseManagementComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DetoxCourseManagementComponent],
        });
        fixture = TestBed.createComponent(DetoxCourseManagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
