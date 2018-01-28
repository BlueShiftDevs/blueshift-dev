import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSummaryListItemComponent } from './card-summary-list-item.component';

describe('CardSummaryListItemComponent', () => {
  let component: CardSummaryListItemComponent;
  let fixture: ComponentFixture<CardSummaryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSummaryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSummaryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
