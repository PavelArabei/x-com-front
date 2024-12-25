import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { hideTopAnimation } from '@animations/hide-top.animation';
import { AppRoutes } from '@app/app.routes';
import { computerComponents } from '@assets/mock/computer-components-category';
import { MatMenuComponent } from '@core/components/mat-menu/mat-menu.component';
import { ScrollEmitterService } from '@core/services/scroll-emitter/scroll-emitter.service';

@Component({
  selector: 'app-header-products-nav',
  standalone: true,
  imports: [MatMenuComponent, AsyncPipe],
  templateUrl: './header-products-nav.component.html',
  styleUrl: './header-products-nav.component.scss',
  animations: [hideTopAnimation],
})
export class HeaderProductsNavComponent {
  protected readonly categoryRoute = AppRoutes.CATEGORY;

  protected readonly isOnTop$ = inject(ScrollEmitterService).isOnTop$();

  protected readonly products = Object.values(computerComponents);

  protected getCategoryRoute(category: string): string {
    return `/${this.categoryRoute}/${category}`;
  }
}
