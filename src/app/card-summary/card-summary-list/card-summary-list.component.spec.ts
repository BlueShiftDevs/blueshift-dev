import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSummaryListComponent } from './card-summary-list.component';

describe('CardSummaryListComponent', () => {
  let component: CardSummaryListComponent;
  let fixture: ComponentFixture<CardSummaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSummaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
