export type ThemeType = 'light' | 'dark' | 'system';
export type ThemeName = 'light-theme' | 'dark-theme' | 'system-theme';
export type LightTheme = {
  type: 'light';
  name: Extract<ThemeName, 'light-theme'>;
};
export type DarkTheme = {
  type: 'dark';
  name: Extract<ThemeName, 'dark-theme'>;
};
export type SystemTheme = {
  type: 'system';
  name: Extract<ThemeName, 'system-theme'>;
};

export type Theme = LightTheme | DarkTheme | SystemTheme;
