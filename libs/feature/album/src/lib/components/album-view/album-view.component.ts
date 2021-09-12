import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyApiService } from '@spotify-web-player/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'spotify-web-player-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss'],
})
export class AlbumViewComponent implements OnInit, OnDestroy {
  album: SpotifyApi.SingleAlbumResponse | undefined;
  private subscription = new Subscription();
  constructor(
    private spotifyApiService: SpotifyApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.route.params.subscribe(({ id }) => {
        this.spotifyApiService
          .getAlbum(id)
          .subscribe((album) => (this.album = album));
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get albumName() {
    return this.album?.name ?? '';
  }

  get albumCover() {
    return this.album?.images[0].url;
  }

  get tracks() {
    return this.album?.tracks.items ?? [];
  }
}
