import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridListComponent } from './components/grid-list/grid-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [GridListComponent],
  declarations: [GridListComponent],
  providers: [],
})
export class ListModule {}
