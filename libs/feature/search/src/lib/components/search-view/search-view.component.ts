import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyApiService } from '@spotify-web-player/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'spotify-web-player-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss'],
})
export class SearchViewComponent implements OnInit, OnDestroy {
  artists: SpotifyApi.PagingObject<SpotifyApi.ArtistObjectFull> | undefined;
  albums: SpotifyApi.PagingObject<SpotifyApi.AlbumObjectSimplified> | undefined;
  tracks: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull> | undefined;
  emptyResults = false;
  query: string | undefined;

  private subscription = new Subscription();
  constructor(
    private spotifyApiService: SpotifyApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.route.queryParams.subscribe(({ q }) => {
        if (q) {
          this.query = q;
          this.spotifyApiService.search(q).subscribe((data) => {
            this.artists = data.artists;
            this.albums = data.albums;
            this.tracks = data.tracks;
            this.emptyResults =
              data.artists?.items.length === 0 &&
              data.albums?.items.length === 0 &&
              data.tracks?.items.length === 0;
          });
        } else {
          this.router.navigate(['/search']);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  search(q: string) {
    this.router.navigate(['search'], {
      queryParams: { q },
      queryParamsHandling: 'merge',
    });
  }

  reduceArtists(album: SpotifyApi.AlbumObjectSimplified) {
    return album.artists.reduce((acc, current, index) => {
      return index > 0 ? (acc = `${acc}, ${current.name}`) : `${current.name}`;
    }, '');
  }
}
