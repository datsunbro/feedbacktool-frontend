import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const header = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllTopics() {
    return this.http.get(`${this.apiUrl}/topics`);
  }

  getLatestTopics() {
    return this.http.get(`${this.apiUrl}/topics/latest`);
  }

  getTopicById(topicId: string) {
    return this.http.get(`${this.apiUrl}/topics/${topicId}`);
  }

  createNewTopic(topic: any) {
    return this.http.post(`${this.apiUrl}/topics`, topic);
  }

  updateTopicById(topicId: string, updatedTopic: any) {
    return this.http.patch(`${this.apiUrl}/topics/${topicId}`, updatedTopic);
  }

  deleteTopicById(topicId: string) {
    return this.http.delete(`${this.apiUrl}/topics/${topicId}`);
  }
}
