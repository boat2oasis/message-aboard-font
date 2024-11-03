import { TestBed } from '@angular/core/testing';

import { MessageBoardOutService } from './message-board-out.service';

describe('MessageBoardOutService', () => {
  let service: MessageBoardOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBoardOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
