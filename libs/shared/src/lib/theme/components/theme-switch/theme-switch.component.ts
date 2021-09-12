import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '../../services';

@Component({
  selector: 'spotify-web-player-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitchComponent {
  darkThemeEnabled = false;
  constructor(private themeService: ThemeService) {}

  switchTheme() {
    this.darkThemeEnabled = !this.darkThemeEnabled;
    this.themeService.toggleTheme();
  }
}
