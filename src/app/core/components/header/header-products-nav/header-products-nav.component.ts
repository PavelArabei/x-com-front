import { Component } from '@angular/core';
import { AppRoutes } from '@app/app.routes';
import { productCategoryNames } from '@assets/mock/products-names';
import { HeaderLinkComponent } from '@core/components/header-link/header-link.component';
import { HeaderMenuComponent } from '@core/components/header-menu/header-menu.component';

@Component({
    selector: 'app-header-products-nav',
    standalone: true,
    imports: [HeaderLinkComponent, HeaderMenuComponent],
    templateUrl: './header-products-nav.component.html',
    styleUrl: './header-products-nav.component.scss',
})
export class HeaderProductsNavComponent {
    protected readonly routerPath = AppRoutes.CATEGORY;
    protected readonly products = Object.values(productCategoryNames);
}
