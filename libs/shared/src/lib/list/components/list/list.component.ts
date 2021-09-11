import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'spotify-web-player-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input()
  elements: SpotifyApi.PagingObject<SpotifyApi.ArtistObjectFull> | undefined;
}
