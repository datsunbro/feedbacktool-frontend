import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../../admin/services/topic.service';



@Component({
  selector: 'app-current-topics',
  templateUrl: './current-topics.component.html',
  styleUrls: ['./current-topics.component.scss']
})
export class CurrentTopicsComponent implements OnInit {
  currentTopics;

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.topicService.getLatestTopics().subscribe( result => {
      console.log(result);
      this.currentTopics = result;
    });
  }

}
