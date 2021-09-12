import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CardModule,
  ImageModule,
  InputModule,
  ListModule,
} from '@spotify-web-player/shared';
import { SearchViewComponent } from './components/search-view/search-view.component';

const routes: Routes = [
  {
    path: '',
    component: SearchViewComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputModule,
    ListModule,
    ImageModule,
    CardModule,
  ],
  exports: [SearchViewComponent],
  declarations: [SearchViewComponent],
  bootstrap: [SearchViewComponent],
})
export class FeatureSearchModule {}
