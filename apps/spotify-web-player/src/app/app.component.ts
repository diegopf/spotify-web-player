import { Component } from '@angular/core';
import { ThemeService } from '@spotify-web-player/shared';

@Component({
  selector: 'spotify-web-player-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}
  switchTheme() {
    this.themeService.toggleTheme();
  }
}
