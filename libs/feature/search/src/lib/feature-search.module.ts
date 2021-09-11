import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ImageModule,
  InputModule,
  ListModule,
} from '@spotify-web-player/shared';
import { SearchLayoutComponent } from './components/search-layout/search-layout.component';
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
  ],
  exports: [SearchViewComponent],
  declarations: [SearchViewComponent, SearchLayoutComponent],
  bootstrap: [SearchViewComponent],
})
export class FeatureSearchModule {}
