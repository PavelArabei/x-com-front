import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderLinkComponent } from '@core/components/header-link/header-link.component';
import { MenuLinkComponent } from '@core/components/menu-link/menu-link.component';
import { MenuWrapperComponent } from '@core/components/menu-wrapper/menu-wrapper.component';

@Component({
    selector: 'app-header-nav',
    standalone: true,
    imports: [HeaderLinkComponent, AsyncPipe, MenuWrapperComponent, MenuLinkComponent],
    templateUrl: './header-nav.component.html',
    styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent {

}
