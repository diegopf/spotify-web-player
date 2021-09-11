import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ChipModule,
  ImageModule,
  ListModule,
} from '@spotify-web-player/shared';
import { ArtistViewComponent } from './components/artist-view/artist-view.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistViewComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ImageModule,
    ChipModule,
    ListModule,
  ],
  declarations: [ArtistViewComponent],
})
export class FeatureArtistModule {}
