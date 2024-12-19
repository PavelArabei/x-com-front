import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { ThemeService } from '@core/services/theme/theme.service';
import { Theme } from '@core/types/theme.type';

@Component({
  selector: 'app-theme-picker',
  standalone: true,
  imports: [
    MatIcon,
    MatFabButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    AsyncPipe,
    TitleCasePipe,
  ],
  templateUrl: './theme-picker.component.html',
  styleUrl: './theme-picker.component.scss',
})
export class ThemePickerComponent {
  themeService = inject(ThemeService);
  protected svgName$ = this.themeService.theme$;

  getThemesList() {
    return this.themeService.getThemesList();
  }

  changeTheme(name: Theme) {
    this.themeService.changeTheme(name);
  }
}
