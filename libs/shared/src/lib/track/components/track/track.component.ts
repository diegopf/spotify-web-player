import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'spotify-web-player-track',
    templateUrl: './track.component.html',
    styleUrls: ['./track.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TrackComponent {
  @Input()
  track!: string | null;
  @Input()
  name!: string;
  @Input()
  uri!: string;

  get spotifyLink() {
    return `https://open.spotify.com/track/${this.uri}`;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.spotifyLink);
  }
}
