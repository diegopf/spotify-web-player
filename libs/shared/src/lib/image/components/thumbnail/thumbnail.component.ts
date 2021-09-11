import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'spotify-web-player-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThumbnailComponent {
  @Input()
  image: string | undefined;
  @Input()
  width = 100;
  @Input()
  height = 100;
  @Input()
  ariaLabel = '';
}
