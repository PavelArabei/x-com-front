import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { headerCategoryNames } from '@assets/mock/category-names';
import { HeaderLinkComponent } from '@core/components/header-link/header-link.component';
import { HeaderMenuComponent } from '@core/components/header-menu/header-menu.component';
import { MenuWrapperComponent } from '@core/components/menu-wrapper/menu-wrapper.component';

@Component({
    selector: 'app-header-nav',
    standalone: true,
    imports: [
        HeaderMenuComponent,
        AsyncPipe,
        MenuWrapperComponent,
        HeaderMenuComponent,
        MatDivider,
        RouterLink,
        HeaderLinkComponent,
    ],
    templateUrl: './header-nav.component.html',
    styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent {
    navInfo = headerCategoryNames;
    protected readonly categoryNames = headerCategoryNames;

    get account() {
        return this.navInfo.account;
    }

    get help() {
        return this.navInfo.help;
    }
    get list() {
        return this.navInfo.lists;
    }

    get basket() {
        return this.navInfo.basket;
    }
}
