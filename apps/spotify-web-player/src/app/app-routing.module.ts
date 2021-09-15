import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search',
      },
      {
        path: 'search',
        loadChildren: () =>
          import('@spotify-web-player/search').then(
            (m) => m.FeatureSearchModule
          ),
      },
      {
        path: 'artist/:id',
        loadChildren: () =>
          import('@spotify-web-player/artist').then(
            (m) => m.FeatureArtistModule
          ),
      },
      {
        path: 'album/:id',
        loadChildren: () =>
          import('@spotify-web-player/album').then((m) => m.FeatureAlbumModule),
      },
      {
        path: '**',
        redirectTo: 'search',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
