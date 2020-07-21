import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  allTopics;

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.topicService.getLatestTopics().subscribe( result => {
      console.log(result);
      this.allTopics = result;
    });
  }
}
