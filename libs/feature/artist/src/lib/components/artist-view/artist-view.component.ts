import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyApiService } from '@spotify-web-player/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'spotify-web-player-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss'],
})
export class ArtistViewComponent implements OnInit, OnDestroy {
  artist!: SpotifyApi.SingleArtistResponse;
  albums!: SpotifyApi.ArtistsAlbumsResponse;
  relatedArtists!: SpotifyApi.ArtistsRelatedArtistsResponse;
  topTracks!: SpotifyApi.ArtistsTopTracksResponse;

  private subscription = new Subscription();
  constructor(
    private spotifyApiService: SpotifyApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.route.params.subscribe(({ id }) => {
        this.spotifyApiService
          .getArtist(id)
          .subscribe((artist) => (this.artist = artist));
        this.spotifyApiService
          .getArtistAlbums(id)
          .subscribe((albums) => (this.albums = albums));
        this.spotifyApiService
          .getArtistRelatedArtists(id)
          .subscribe(
            (relatedArtists) => (this.relatedArtists = relatedArtists)
          );
        this.spotifyApiService
          .getArtistTopTracks(id)
          .subscribe((topTracks) => (this.topTracks = topTracks));
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getArtistImage() {
    return this.artist?.images[0].url;
  }

  get artistName() {
    return this.artist?.name || '';
  }

  get genres() {
    return this.artist?.genres.slice(0, 4) ?? [];
  }

  get followers() {
    return `${this.artist?.followers.total} followers` ?? '0 followers';
  }

  get relatedArtistsCollection() {
    return this.relatedArtists?.artists ?? [];
  }

  get artistAlbums() {
    return this.albums?.items;
  }

  get artistTopTracks() {
    return this.topTracks?.tracks;
  }

  get spotifyUri() {
    return `https://open.spotify.com/artist/${this.artist.id}`;
  }
}
