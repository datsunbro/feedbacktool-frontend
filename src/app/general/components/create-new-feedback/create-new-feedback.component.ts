import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../../admin/services/topic.service';
import { FeedbackService } from '../../services/feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-new-feedback',
  templateUrl: './create-new-feedback.component.html',
  styleUrls: ['./create-new-feedback.component.scss']
})
export class CreateNewFeedbackComponent implements OnInit {
  currentTopic;
  feedbackSent: boolean;

  constructor(private topicService: TopicService, private feedbackService: FeedbackService, private route: ActivatedRoute) { }

  ngOnInit() {
    const topicId = this.route.snapshot.paramMap.get('id');
    console.log(topicId);
    this.topicService.getTopicById(topicId).subscribe( (result: any) => {
      console.log(result);
      this.currentTopic = result;
    });
  }

  sendFeedback(feedback: string) {
    const topicId = this.currentTopic._id;
    const newFeedback = {
      feedback,
      topicId
    };
    this.feedbackService.createNewFeedback(newFeedback).subscribe( result => {
      console.log(result);
      this.feedbackSent = true;
    });
  }

}
