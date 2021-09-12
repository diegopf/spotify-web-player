import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'spotify-web-player-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  route!: string;
  @Input()
  routeArg!: string;
  @Input()
  mainLabel!: string;
  @Input()
  secondaryLabel!: string;
}
