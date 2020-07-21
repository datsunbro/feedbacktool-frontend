import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const header = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createNewFeedback(feedback: any) {
    console.log(feedback);
    return this.http.post(`${this.apiUrl}/feedback`, feedback);
  }

  getAllFeedbackByTopicId(topicId: any) {
    return this.http.get(`${this.apiUrl}/topics/${topicId}/feedback`);
  }
}
