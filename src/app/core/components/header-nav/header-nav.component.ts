import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderLinkComponent } from '@core/components/header-link/header-link.component';

@Component({
    selector: 'app-header-nav',
    standalone: true,
    imports: [HeaderLinkComponent, AsyncPipe],
    templateUrl: './header-nav.component.html',
    styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent {

}
