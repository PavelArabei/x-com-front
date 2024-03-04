import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProductsNavComponent } from './header-products-nav.component';

describe('HeaderProductsNavComponent', () => {
    let component: HeaderProductsNavComponent;
    let fixture: ComponentFixture<HeaderProductsNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderProductsNavComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HeaderProductsNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
