import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SubMenuLinkContent } from '@assets/mock/category-names';

@Component({
    selector: 'app-menu-link',
    standalone: true,
    imports: [MatIcon, RouterLink],
    templateUrl: './menu-link.component.html',
    styleUrl: './menu-link.component.scss',
})
export class MenuLinkComponent {
    @Input() svgName: string | null = null;
    @Input() IsNested: SubMenuLinkContent | null = null;
    @Input({ required: true }) link: string = '';
}
