import { TestBed } from '@angular/core/testing';

import { SkrollEmitterService } from './scroll-emitter.service';

describe('SkrollEmitterService', () => {
    let service: SkrollEmitterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SkrollEmitterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
