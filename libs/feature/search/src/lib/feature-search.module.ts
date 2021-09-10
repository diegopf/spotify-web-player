import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SearchInputComponent],
  declarations: [SearchInputComponent],
})
export class FeatureSearchModule {}
