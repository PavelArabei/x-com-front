import { Injectable } from '@angular/core';
import { Theme, ThemeName } from '@core/types/theme.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themes: readonly Theme[] = [
    {
      type: 'light',
      name: 'light-theme',
    },
    {
      type: 'dark',
      name: 'dark-theme',
    },
    {
      type: 'system',
      name: 'system-theme',
    },
  ] as const;

  private isSystemHasDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  private windowTheme: ThemeName = this.isSystemHasDarkTheme
    ? 'dark-theme'
    : 'light-theme';

  private localStorageTheme: ThemeName = localStorage.getItem(
    'theme'
  ) as ThemeName;

  private themeName: ThemeName = this.localStorageTheme || this.windowTheme;

  private theme =
    this.themes.find((theme) => theme.name === this.themeName) ??
    this.themes[1];

  private themeSubject = new BehaviorSubject<Theme>(this.theme);

  theme$ = this.themeSubject.asObservable();

  constructor() {
    this.addClassToBody();
  }

  getThemesList() {
    return this.themes;
  }

  changeTheme(theme: Theme) {
    if (this.theme.name === theme.name) return;
    this.theme = theme;
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme.name);
    this.addClassToBody();
  }

  addClassToBody() {
    if (
      this.theme.name === 'light-theme' ||
      (this.theme.name === 'system-theme' && !this.isSystemHasDarkTheme)
    ) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }
}
