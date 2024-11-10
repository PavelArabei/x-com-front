import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '@app/app.routes';
import { SubMenuLinkContent } from '@core/types/sub-menu-link-content.interface';
import { ButtonLinkComponent } from '@shared/components/button-link/button-link.component';

@Component({
    selector: 'app-header-menu',
    standalone: true,
    imports: [MatIcon, RouterLink, NgClass, ButtonLinkComponent],
    templateUrl: './header-menu.component.html',
    styleUrl: './header-menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent {
    protected subCategoryRouterPath = AppRoutes.SUBCATEGORY;

    @Input() menuItems: SubMenuLinkContent[] | null = null;
    @Input({ required: true }) title!: string;
    @Input() nestingLevel: number = 0;
    @Input() additionalRoutePath: string | null = null;

    getRouterLink(route: string): string {
        return this.additionalRoutePath
            ? `/${this.additionalRoutePath}/${route}`
            : `/${route}`;
    }
}
