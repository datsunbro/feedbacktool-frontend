import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  allTopics;

  constructor(
    private flashMessages: FlashMessagesService,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.retrieveAllTopics();
  }

  deleteTopic(topicId: string) {
    this.topicService.deleteTopicById(topicId).subscribe( result => {
      console.log(result);
    },
      error => {
        console.log(error);
        this.flashMessages.show(
          'Fehler beim Löschen des Themas. Fehler: ' + error.statusText,
          {
            cssClass: 'alert alert-danger',
            timeout: 2000
          });
      },
      () => {
        this.flashMessages.show(
          'Thema erfolgreich gelöscht!',
          {
            cssClass: 'alert alert-success',
            timeout: 2000
          });
        this.retrieveAllTopics();
        return true;
      });
  }

  retrieveAllTopics() {
    this.topicService.getAllTopics().subscribe( result => {
      console.log(result);
      this.allTopics = result;
    });
  }
}
