import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifRoutingModule } from './gif-routing.module';
import { GifComponent } from './gif.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [GifComponent],
  imports: [
    CommonModule,
    SharedModule,
    GifRoutingModule
  ]
})
export class GifModule { }
