import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'spotify-web-player-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit, OnDestroy {
  searchText = new FormControl('');
  @Output()
  searchFor = new EventEmitter<string>();

  private subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.searchText.valueChanges
        .pipe(debounceTime(200))
        .subscribe((value: string) => {
          this.searchFor.emit(value);
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
