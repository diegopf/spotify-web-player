import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyApiService } from '@spotify-web-player/api';

@Component({
  selector: 'spotify-web-player-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss'],
})
export class SearchViewComponent implements OnInit {
  elements: SpotifyApi.PagingObject<SpotifyApi.ArtistObjectFull> | undefined;
  constructor(
    private spotifyApiService: SpotifyApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(({ searchKeywords }) => {
      if (searchKeywords) {
        this.spotifyApiService.search(searchKeywords).subscribe((data) => {
          this.elements = data.artists;
        });
      }
    });
  }

  search(searchKeywords: string) {
    this.router.navigate(['search'], {
      queryParams: { searchKeywords },
      queryParamsHandling: 'merge',
    });
  }
}
