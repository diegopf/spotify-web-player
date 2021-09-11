import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

@NgModule({
  imports: [CommonModule],
  exports: [ThumbnailComponent],
  declarations: [ThumbnailComponent],
  providers: [],
})
export class ImageModule {}
