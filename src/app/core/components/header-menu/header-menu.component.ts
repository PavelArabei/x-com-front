import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SubMenuLinkContent } from '@core/types/sub-menu-link-content.interface';

@Component({
    selector: 'app-header-menu',
    standalone: true,
    imports: [MatIcon, RouterLink, NgClass],
    templateUrl: './header-menu.component.html',
    styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
    @Input({ required: true }) menuItems!: SubMenuLinkContent[];
    protected readonly onmouseenter = onmouseenter;
}
