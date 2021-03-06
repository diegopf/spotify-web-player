import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ImageModule,
  ListModule,
  TrackModule,
  ViewModule,
} from '@spotify-web-player/shared';
import { AlbumViewComponent } from './components/album-view/album-view.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumViewComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ImageModule,
    TrackModule,
    ViewModule,
    ListModule,
  ],
  declarations: [AlbumViewComponent],
})
export class FeatureAlbumModule {}
