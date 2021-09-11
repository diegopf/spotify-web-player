import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [CommonModule],
  exports: [ListComponent],
  declarations: [ListComponent],
  providers: [],
})
export class ListModule {}
