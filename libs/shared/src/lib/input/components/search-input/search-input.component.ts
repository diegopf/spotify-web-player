import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'spotify-web-player-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output()
  searchFor = new EventEmitter<string>();

  @Input()
  query: string | undefined;

  @Input()
  placeholder = 'Search here!';

  searchText = new UntypedFormControl('');
  private subscription = new Subscription();

  ngOnInit(): void {
    if (this.query) {
      this.searchText.patchValue(this.query, {
        emitEvent: false,
      });
    }
    this.subscription.add(
      this.searchText.valueChanges
        .pipe(debounceTime(300))
        .subscribe((value: string) => {
          this.searchFor.emit(value);
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.searchFor.emit(this.searchText.value);
  }
}
