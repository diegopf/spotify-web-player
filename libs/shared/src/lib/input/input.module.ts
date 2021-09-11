import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports: [SearchInputComponent],
  declarations: [SearchInputComponent],
})
export class InputModule {}
