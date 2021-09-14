/// <reference types="spotify-api" />
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SpotifyApiService } from './spotify-api.service';

describe('spotifyApiService', () => {
  let service: SpotifyApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SpotifyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should search against the api ', (done: any) => {
    const query = 'Band of horses';
    const response = {
      artists: {
        href: `https://api.spotify.com/v1/search?q=${query}&type=artist,album,track`,
        items: [{}],
      },
      albums: { items: [{}, {}] },
      tracks: {},
    };
    const requestUrl = `https://api.spotify.com/v1/search?q=${query}&type=artist,album,track`;

    service.search(query).subscribe((data) => {
      expect(data.artists?.href).toBe(requestUrl);
      expect(data.albums?.items.length).toBe(2);
      done();
    });

    const req = httpTestingController.expectOne(requestUrl);
    req.flush(response);
  });

  it('Should search for an artist ', (done: any) => {
    const artistId = '1234567';
    const requestUrl = `https://api.spotify.com/v1/artists/${artistId}`;
    const response = {
      id: artistId,
      href: requestUrl,
    };

    service.getArtist(artistId).subscribe((data) => {
      expect(data.href).toEqual(requestUrl);
      expect(data.id).toEqual(artistId);
      done();
    });
    const req = httpTestingController.expectOne(requestUrl);
    req.flush(response);
  });

  it('Should get an artist album ', (done: any) => {
    const artistId = '1234567';
    const requestUrl = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    const response = {
      items: [{}, {}, {}],
      href: requestUrl,
    };

    service.getArtistAlbums(artistId).subscribe((data) => {
      expect(data.href).toEqual(requestUrl);
      expect(data.items.length).toBe(3);
      done();
    });

    const req = httpTestingController.expectOne(requestUrl);
    req.flush(response);
  });

  it('Should get an related artists', (done: any) => {
    const artistId = '1234567';
    const requestUrl = `https://api.spotify.com/v1/artists/${artistId}/related-artists`;
    const response = {
      artists: [{}, {}, {}],
    };

    service.getArtistRelatedArtists(artistId).subscribe((data) => {
      expect(data.artists.length).toBe(3);
      done();
    });

    const req = httpTestingController.expectOne(requestUrl);
    req.flush(response);
  });

  it('Should get artist top tracks', (done: any) => {
    const artistId = '1234567';
    const requestUrl = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`;
    const response = {
      tracks: [{}, {}],
    };

    service.getArtistTopTracks(artistId).subscribe((data) => {
      expect(data.tracks.length).toBe(2);
      done();
    });

    const req = httpTestingController.expectOne(requestUrl);
    req.flush(response);
  });

  it('Should get album', (done: any) => {
    const albumId = '1234567';
    const requestUrl = `https://api.spotify.com/v1/albums/${albumId}`;
    const response = {
      artists: [{}],
      href: requestUrl,
      id: albumId,
    };

    service.getAlbum(albumId).subscribe((data) => {
      expect(data.href).toEqual(requestUrl);
      expect(data.id).toBe(albumId);
      expect(data.artists.length).toEqual(1);
      done();
    });

    const req = httpTestingController.expectOne(requestUrl);
    req.flush(response);
  });
});
