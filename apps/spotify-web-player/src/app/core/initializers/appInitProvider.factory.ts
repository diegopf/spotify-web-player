import { AuthService } from '@spotify-web-player/auth';
import { environment } from '../../../environments/environment';

export function appInitProviderFactory(AuthService: AuthService) {
  return () => AuthService.requestToken(environment.SPOTIFY_API_KEY);
}
