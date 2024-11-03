import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAboardComponent } from './message-aboard.component';

describe('MessageAboardComponent', () => {
  let component: MessageAboardComponent;
  let fixture: ComponentFixture<MessageAboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageAboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageAboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
