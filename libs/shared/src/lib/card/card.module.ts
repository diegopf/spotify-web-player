import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  exports: [CardComponent],
  declarations: [CardComponent],
  providers: [],
})
export class CardModule {}
