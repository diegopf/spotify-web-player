import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  private baseApiUrl = 'https://api.spotify.com/v1';
  constructor(private http: HttpClient) {}

  search(searchText: string, type: string = 'artist,album,track') {
    return this.http
      .get<SpotifyApi.SearchResponse>(
        `${this.baseApiUrl}/search?q=${searchText}&type=${type}`
      )
      .pipe(take(1));
  }

  getArtist(id: string) {
    return this.http
      .get<SpotifyApi.SingleArtistResponse>(`${this.baseApiUrl}/artists/${id}`)
      .pipe(take(1));
  }
}
