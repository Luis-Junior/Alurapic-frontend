import { immediateClickDirective } from './immediate-click.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [immediateClickDirective],
  exports:[immediateClickDirective],
  imports: [CommonModule]
})
export class ImmediateClickModule {}
