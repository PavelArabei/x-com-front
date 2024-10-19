import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { MainSearchComponent } from './main-search.component';

describe('MainSearchComponent', () => {
    let component: MainSearchComponent;
    let fixture: ComponentFixture<MainSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MainSearchComponent, MatIconModule],
        }).compileComponents();

        const registry = TestBed.inject(MatIconRegistry);
        const sanitizer = TestBed.inject(DomSanitizer);
        registry.addSvgIconLiteral(
            'search',
            sanitizer.bypassSecurityTrustHtml('<svg></svg>')
        );
        fixture = TestBed.createComponent(MainSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
