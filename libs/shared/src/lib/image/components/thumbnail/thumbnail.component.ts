import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
    selector: 'spotify-web-player-thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ThumbnailComponent {
  @Input()
  image: string | undefined;
  @Input()
  width = 200;
  @Input()
  height = 200;
  @Input()
  ariaLabel = '';
  @Input()
  title = '';

  loaded() {
    this.el.nativeElement.classList.add('loaded');
  }
  constructor(private el: ElementRef) {}
}
