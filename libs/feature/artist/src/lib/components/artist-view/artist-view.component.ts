import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyApiService } from '@spotify-web-player/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'spotify-web-player-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss'],
})
export class ArtistViewComponent implements OnInit, OnDestroy {
  artist: SpotifyApi.SingleArtistResponse | undefined;
  private subscription = new Subscription();
  constructor(
    private spotifyApiService: SpotifyApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.route.params.subscribe(({ id }) => {
        this.spotifyApiService
          .getArtist(id)
          .subscribe((artist) => (this.artist = artist));
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getArtistImage() {
    return this.artist?.images[0].url;
  }

  getArtistName() {
    return this.artist?.name || '';
  }
}
