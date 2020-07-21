import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LoginComponent } from './general/components/login/login.component';
import { CurrentTopicsComponent } from './general/components/current-topic/current-topics.component';
import { GeneralViewComponent } from './layout/general-view/general-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatSidenavModule
} from '@angular/material';
import { CreateNewFeedbackComponent } from './general/components/create-new-feedback/create-new-feedback.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateNewTopicComponent } from './admin/components/create-new-topic/create-new-topic.component';
import { AdminViewComponent } from './layout/admin-view/admin-view.component';
import { TopicListComponent } from './admin/components/topic-list/topic-list.component';
import { FeedbackPreviewComponent } from './admin/components/feedback-preview/feedback-preview.component';
import { EditTopicComponent } from './admin/components/edit-topic/edit-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CurrentTopicsComponent,
    GeneralViewComponent,
    CreateNewFeedbackComponent,
    CreateNewTopicComponent,
    AdminViewComponent,
    TopicListComponent,
    FeedbackPreviewComponent,
    EditTopicComponent,
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
