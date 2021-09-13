import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services';

@Component({
  selector: 'spotify-web-player-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitchComponent implements OnInit {
  darkThemeEnabled = false;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    const darkThemeEnabled = localStorage.getItem('darkThemeEnabled');
    if (darkThemeEnabled === 'true') {
      this.switchTheme();
    }
  }

  switchTheme() {
    this.darkThemeEnabled = !this.darkThemeEnabled;
    localStorage.setItem('darkThemeEnabled', `${this.darkThemeEnabled}`);
    this.themeService.toggleTheme();
  }
}
