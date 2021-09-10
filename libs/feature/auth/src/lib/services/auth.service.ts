import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

export interface AuthInfo {
  access_token: string;
  token_type: string;
  expires_in: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseAuthUrl = 'https://accounts.spotify.com/api';
  private authInfo: AuthInfo = {
    access_token: '',
    token_type: 'Bearer',
    expires_in: -1,
  };

  constructor(private http: HttpClient) {}

  /**
   * Token needed to autenticate the application agains the API
   */
  get token() {
    return this.authInfo.access_token;
  }

  /**
   *
   * @param apiKey {string} base64 encoded client_id:client_secret
   * @returns {Observable<AuthInfo>} returns an observable which will resolve the authentication necessary data to consume the API
   */
  fetchAuthInfoFromAPI(apiKey: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${apiKey}`,
      }),
    };

    const body = new HttpParams().set(`grant_type`, 'client_credentials');
    return this.http
      .post<AuthInfo>(`${this.baseAuthUrl}/token`, body, httpOptions)
      .pipe(
        take(1),
        tap((next: AuthInfo) => {
          this.authInfo = next;
          localStorage.setItem('access_token', this.authInfo.access_token);
          localStorage.setItem(
            'expires_in',
            JSON.stringify(Date.now() + 3600 * 1000)
          );
        })
      );
  }

  /**
   *
   * @returns {AuthInfo | null} returns the authentication data from localStorage if available or null if not
   */
  fetchAuthInfoFromLocalStorage(): AuthInfo | null {
    const access_token = localStorage.getItem('access_token');
    const expireString = localStorage.getItem('expires_in');

    if (access_token && expireString) {
      const expires_in = JSON.parse(expireString);
      return Date.now() < expires_in
        ? {
            token_type: 'Bearer',
            access_token,
            expires_in,
          }
        : null;
    }

    return null;
  }

  /**
   *
   * @param apiKey {string} base64 encoded client_id:client_secret
   * @returns returns the authentication data either from localStorage or the API
   */
  requestToken(apiKey: string): Observable<AuthInfo> {
    const authInfo = this.fetchAuthInfoFromLocalStorage();
    if (authInfo) {
      this.authInfo = authInfo;
      return of(authInfo);
    }
    return this.fetchAuthInfoFromAPI(apiKey);
  }
}
