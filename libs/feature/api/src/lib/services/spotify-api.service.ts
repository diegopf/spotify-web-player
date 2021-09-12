import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  private baseApiUrl = 'https://api.spotify.com/v1';
  constructor(private http: HttpClient) {}

  /**
   *
   * @param searchText {string} the text to search for
   * @param type {string} scope for the search
   * @returns {Observable<SpotifyApi.SearchResponse>} r
   *  retuns an observable which will resolve with the results that matches the query
   */
  search(
    searchText: string,
    type: string = 'artist,album,track'
  ): Observable<SpotifyApi.SearchResponse> {
    return this.http
      .get<SpotifyApi.SearchResponse>(
        `${this.baseApiUrl}/search?q=${searchText}&type=${type}`
      )
      .pipe(take(1));
  }

  /**
   *
   * @param id {string} artist id to search for
   * @returns {Observable<SpotifyApi.SingleArtistResponse>}
   * returns an observable which will resolve the artist related info
   */
  getArtist(id: string): Observable<SpotifyApi.SingleArtistResponse> {
    return this.http
      .get<SpotifyApi.SingleArtistResponse>(`${this.baseApiUrl}/artists/${id}`)
      .pipe(take(1));
  }

  /**
   *
   * @param id {string} artist id to search for
   * @returns {Observable<SpotifyApi.ArtistsAlbumsResponse>}
   * returns an observable which will resolve the artist's albums
   */
  getArtistAlbums(id: string): Observable<SpotifyApi.ArtistsAlbumsResponse> {
    return this.http
      .get<SpotifyApi.ArtistsAlbumsResponse>(
        `${this.baseApiUrl}/artists/${id}/albums`
      )
      .pipe(take(1));
  }

  /**
   *
   * @param id {string} artist id to search for
   * @returns {Observable<SpotifyApi.ArtistsRelatedArtistsResponse>}
   * returns an observable which will resolve the related artist
   */
  getArtistRelatedArtists(
    id: string
  ): Observable<SpotifyApi.ArtistsRelatedArtistsResponse> {
    return this.http
      .get<SpotifyApi.ArtistsRelatedArtistsResponse>(
        `${this.baseApiUrl}/artists/${id}/related-artists`
      )
      .pipe(take(1));
  }

  /**
   *
   * @param id {string} artist id to search for
   * @returns {Observable<SpotifyApi.ArtistsTopTracksResponse>}
   * returns an observable which will resolve the artist's top tracks
   */
  getArtistTopTracks(
    id: string
  ): Observable<SpotifyApi.ArtistsTopTracksResponse> {
    return this.http
      .get<SpotifyApi.ArtistsTopTracksResponse>(
        `${this.baseApiUrl}/artists/${id}/top-tracks?market=ES`
      )
      .pipe(take(1));
  }

  /**
   *
   * @param id {string} album id to search for
   * @returns {Observable<SpotifyApi.SingleAlbumResponse>}
   * returns an observable which will resolve the album related info
   */
  getAlbum(id: string): Observable<SpotifyApi.SingleAlbumResponse> {
    return this.http
      .get<SpotifyApi.SingleAlbumResponse>(`${this.baseApiUrl}/albums/${id}`)
      .pipe(take(1));
  }
}
