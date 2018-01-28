import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSummaryComponent } from './card-summary.component';
import { CardSummaryListComponent } from './card-summary-list/card-summary-list.component';
import { CardSummaryListItemComponent } from './card-summary-list-item/card-summary-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardSummaryComponent,
    CardSummaryListComponent,
    CardSummaryListItemComponent]
})
export class CardSummaryModule { }
