import { TestBed } from '@angular/core/testing';

import { ScrollEmitterService } from './scroll-emitter.service';

describe('SkrollEmitterService', () => {
    let service: ScrollEmitterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ScrollEmitterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
