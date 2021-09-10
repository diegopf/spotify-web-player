import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  private baseApiUrl = 'https://api.spotify.com/v1';
  constructor(private http: HttpClient) {}

  search(searchText: string, type: string = 'artist,album,track') {
    return this.http.get<SpotifyApi.SearchResponse>(
      `${this.baseApiUrl}/search?q=${searchText}&type=${type}`
    );
  }
}
