import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
