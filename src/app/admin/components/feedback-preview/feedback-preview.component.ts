import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../general/services/feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback-preview',
  templateUrl: './feedback-preview.component.html',
  styleUrls: ['./feedback-preview.component.scss']
})
export class FeedbackPreviewComponent implements OnInit {
  allFeedback;

  constructor(private feedbackService: FeedbackService, private route: ActivatedRoute) { }

  ngOnInit() {
    const topicId = this.route.snapshot.paramMap.get('id');
    this.feedbackService.getAllFeedbackByTopicId(topicId).subscribe( result => {
      this.allFeedback = result;
    });
  }

}
