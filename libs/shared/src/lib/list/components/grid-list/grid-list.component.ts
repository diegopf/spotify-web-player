import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'spotify-web-player-grid-list',
    templateUrl: './grid-list.component.html',
    styleUrls: ['./grid-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class GridListComponent {}
