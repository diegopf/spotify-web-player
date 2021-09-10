import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '@spotify-web-player/auth';
import { TokenInterceptor } from './token.interceptor';

class AuthServiceMock {
  token = 'abc';
}

@Injectable()
class DataService {
  baseApi = 'api.spotify.com.';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.baseApi);
  }
}

describe('TokenInterceptor', () => {
  let httpMock: HttpTestingController;
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DataService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
        {
          provide: AuthService,
          useClass: AuthServiceMock,
        },
      ],
    });

    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Should set the Authorization header for api related calls', () => {
    service.getData().subscribe();
    const httpRequest = httpMock.expectOne(`api.spotify.com.`);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
    const authorizationHeader =
      httpRequest.request.headers.get('Authorization');
    expect(authorizationHeader).toEqual(`Bearer abc`);
  });
  it('Should not set the Authorization header for api not related calls', () => {
    service.baseApi = '/foo';
    service.getData().subscribe();
    const httpRequest = httpMock.expectOne(`/foo`);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(false);
  });
});
