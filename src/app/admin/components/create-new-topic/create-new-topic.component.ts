import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-create-new-topic',
  templateUrl: './create-new-topic.component.html',
  styleUrls: ['./create-new-topic.component.scss']
})
export class CreateNewTopicComponent implements OnInit {
  topicSent;
  minDate = new Date();
  constructor(private topicService: TopicService) { }

  ngOnInit() {
  }

  createTopic(topic: any) {
    const title = topic.title;
    const description = topic.description;
    const openForFeedback = true ? topic.openForFeedback : false;
    const feedbackDeadline = topic.feedbackDeadline;

    console.log(feedbackDeadline);

    const newTopic = {
      title,
      description,
      openForFeedback,
      feedbackDeadline
    };

    this.topicService.createNewTopic(newTopic).subscribe( (result: any) => {
      console.log(result);
      this.topicSent = true;
    });

    console.log(newTopic);

  }

}
