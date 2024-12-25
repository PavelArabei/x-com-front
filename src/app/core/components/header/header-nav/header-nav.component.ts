import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { headerCategoryNames } from '@assets/mock/category-names';
import { MatMenuComponent } from '@core/components/mat-menu/mat-menu.component';
import { ThemePickerComponent } from '@core/components/theme-picker/theme-picker.component';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    MatDivider,
    MatIconModule,
    MatButtonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatMenuComponent,
    ThemePickerComponent,
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent {
  protected readonly navInfo = headerCategoryNames;
  get account() {
    return this.navInfo.account;
  }

  get basket() {
    return this.navInfo.basket;
  }
}
