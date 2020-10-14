import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent} from './app/layout/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FlashMessagesModule.forRoot(),
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FlashMessagesModule,
    FlexLayoutModule,
    FooterComponent
  ]
})
export class SharedModule { }
