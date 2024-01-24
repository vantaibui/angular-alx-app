import { TestBed } from '@angular/core/testing';

import { DetoxCourseService } from './detox-course.service';

describe('DetoxCourseService', () => {
    let service: DetoxCourseService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DetoxCourseService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
