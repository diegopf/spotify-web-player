import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { THEMES } from '../config/themes.config';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = 'light';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleTheme() {
    const themeName = this.currentTheme === 'light' ? 'dark' : 'light';
    const theme = THEMES[themeName];
    for (const key of Object.keys(theme)) {
      this.document.documentElement.style.setProperty(`--${key}`, theme[key]);
    }
    this.currentTheme = themeName;
  }
}
