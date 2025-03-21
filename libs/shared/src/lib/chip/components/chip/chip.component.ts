import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'spotify-web-player-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ChipComponent {
  @Input()
  label: string | number | undefined;

  @Input()
  ariaLabel: string | undefined;
}
