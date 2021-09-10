import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'spotify-web-player-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spotify-web-player';
  req: Observable<unknown>;
  constructor(private http: HttpClient) {
    this.req = this.http.get(
      'https://api.spotify.com/v1/search?query=khruangbin&offset=0&limit=20&type=artist'
    );
  }
}
