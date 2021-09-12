import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';

@NgModule({
  imports: [CommonModule],
  exports: [ThemeSwitchComponent],
  declarations: [ThemeSwitchComponent],
})
export class ThemeSwitchModule {}
