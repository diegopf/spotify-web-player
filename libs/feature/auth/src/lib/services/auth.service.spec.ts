import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthInfo, AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthService);
  });

  beforeEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return null if there is no token stored ', () => {
    const authInfo = service.fetchAuthInfoFromLocalStorage();
    expect(authInfo).toBeFalsy();
  });

  it('Should not retrieve token from local storage if it is expired', () => {
    const access_token = 'abc';
    const expires_in = JSON.stringify(Date.now() - 3600);
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('expires_in', expires_in);

    const authInfo = service.fetchAuthInfoFromLocalStorage();
    expect(authInfo).toBeFalsy();
  });

  it('Should retrieve token from local storage if it is still valid', () => {
    const access_token = 'abc';
    const expires_in = JSON.stringify(Date.now() + 3600 * 1000);
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('expires_in', expires_in);

    const authInfo = service.fetchAuthInfoFromLocalStorage();
    expect(authInfo?.access_token).toBe(access_token);
    expect(authInfo?.expires_in).toBe(+expires_in);
  });

  it('Should retrieve the token from the API', () => {
    const authInfo: AuthInfo = {
      access_token: 'abc',
      expires_in: 3600,
      token_type: 'Bearer',
    };
    service.requestToken('/api/token').subscribe();
    const req = httpTestingController.expectOne(
      'https://accounts.spotify.com/api/token'
    );

    req.flush(authInfo);

    expect(service.token).toEqual(authInfo.access_token);
  });
});
