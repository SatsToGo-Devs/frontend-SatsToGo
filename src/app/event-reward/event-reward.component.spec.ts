import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRewardComponent } from './event-reward.component';

describe('EventRewardComponent', () => {
  let component: EventRewardComponent;
  let fixture: ComponentFixture<EventRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRewardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
