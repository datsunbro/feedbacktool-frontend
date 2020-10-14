import { TestBed } from '@angular/core/testing';

import { TopicService } from './topic.service';
import { HttpClientModule } from '@angular/common/http';

describe('TopicService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: TopicService = TestBed.get(TopicService);
    expect(service).toBeTruthy();
  });
});
