import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss']
})
export class EditTopicComponent implements OnInit {
  topic: any;
  topicUpdated: boolean = false;
  minDate = new Date();

  constructor(
    private flashMessages: FlashMessagesService,
    private topicService: TopicService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const topicId = this.activeRoute.snapshot.paramMap.get('id');
    this.topicService.getTopicById(topicId).subscribe( result => {
      this.topic = result;
    });
  }

  updateTopic( updatedTopic: any) {
    console.log(updatedTopic);
    this.topicService.updateTopicById(this.topic._id, updatedTopic).subscribe(res => {
      this.topic = res;
      this.topicUpdated = true;
      },
      (error) => {
        console.log(error);
        this.flashMessages.show('Fehler beim Speichern der Änderung! Fehler: ' + error, { cssClass: 'alert alert-danger', timeout: 2000 });
      },
      () => {
        this.flashMessages.show('Änderung erfolgreich gespeichert!', { cssClass: 'alert alert-success', timeout: 2000 });
        setTimeout( () => {
          this.router.navigateByUrl('/topics');
        }, 2000);
    });
  }

}
