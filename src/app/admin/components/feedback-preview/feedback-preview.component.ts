import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../general/services/feedback.service';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-feedback-preview',
  templateUrl: './feedback-preview.component.html',
  styleUrls: ['./feedback-preview.component.scss']
})
export class FeedbackPreviewComponent implements OnInit {
  topic;
  allFeedback;

  constructor(
    private feedbackService: FeedbackService,
    private route: ActivatedRoute,
    private topicService: TopicService ) { }

  ngOnInit() {
    const topicId = this.route.snapshot.paramMap.get('id');
    this.topicService.getTopicById(topicId).subscribe( topicResult => {
      this.topic = topicResult;
    });
    this.feedbackService.getAllFeedbackByTopicId(topicId).subscribe( feedbackResult => {
      this.allFeedback = feedbackResult;
    });
  }

}
