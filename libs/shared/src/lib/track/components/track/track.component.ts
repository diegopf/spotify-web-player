import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'spotify-web-player-track',
  templateUrl: './track.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackComponent {
  @Input()
  track!: string;
}
