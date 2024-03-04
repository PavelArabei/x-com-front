import { Component } from '@angular/core';
import productCategoryNames from '@assets/mock/products-names';
import { HeaderLinkComponent } from '@core/components/header-link/header-link.component';

@Component({
    selector: 'app-header-products-nav',
    standalone: true,
    imports: [HeaderLinkComponent],
    templateUrl: './header-products-nav.component.html',
    styleUrl: './header-products-nav.component.scss',
})
export class HeaderProductsNavComponent {
    products = Object.values(productCategoryNames);
}
