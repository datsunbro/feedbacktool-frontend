import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentTopicsComponent } from './general/components/current-topic/current-topics.component';
import { GeneralViewComponent } from './layout/general-view/general-view.component';
import { LoginComponent } from './general/components/login/login.component';
import { CreateNewFeedbackComponent } from './general/components/create-new-feedback/create-new-feedback.component';
import { CreateNewTopicComponent } from './admin/components/create-new-topic/create-new-topic.component';
import { AdminViewComponent } from './layout/admin-view/admin-view.component';
import { TopicListComponent } from './admin/components/topic-list/topic-list.component';
import { FeedbackPreviewComponent } from './admin/components/feedback-preview/feedback-preview.component';
import { EditTopicComponent } from './admin/components/edit-topic/edit-topic.component';

const routes: Routes = [
  {
    path: '', component: GeneralViewComponent,
    children: [
      {
        path: '', component: CurrentTopicsComponent
      }
    ]
  },
  {
    path: 'admin', component: AdminViewComponent,
    children: [
      {
        path: '', component: TopicListComponent
      }
    ]
  },
  {
    path: 'topic/:id/new-feedback', component: GeneralViewComponent,
    children: [
      {
        path: '', component: CreateNewFeedbackComponent
      }
    ]
  },
  {
    path: 'login', component: GeneralViewComponent,
    children: [
      {
        path: '', component: LoginComponent
      }
    ]
  },
  {
    path: 'current-topics', component: GeneralViewComponent,
    children: [
      {
        path: '', component: CurrentTopicsComponent
      }
    ]
  },
  {
    path: 'topics', component: AdminViewComponent,
    children: [
      {
        path: '', component: TopicListComponent
      }
    ]
  },
  {
    path: 'topics/new', component: AdminViewComponent,
    children: [
      {
        path: '', component: CreateNewTopicComponent
      }
    ]
  },
  {
    path: 'topic/:id/edit', component: AdminViewComponent,
    children: [
      {
        path: '', component: EditTopicComponent
      }
    ]
  },
  {
    path: 'topic/:id/feedback-preview', component: AdminViewComponent,
    children: [
      {
        path: '', component: FeedbackPreviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
