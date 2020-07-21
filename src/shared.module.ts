import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent} from './app/layout/footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FooterComponent
  ]
})
export class SharedModule { }
