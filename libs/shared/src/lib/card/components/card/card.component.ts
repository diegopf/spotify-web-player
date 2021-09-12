import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'spotify-web-player-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  route: string | undefined;
  @Input()
  routeArg: string | undefined;
  @Input()
  mainLabel: string | undefined;
  @Input()
  secondaryLabel: string | undefined;
}
