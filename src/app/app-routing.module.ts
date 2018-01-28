import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardSummaryComponent } from './card-summary/card-summary.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/summary',
    pathMatch: 'full'
  },
  {
    path: 'summary',
    component: CardSummaryComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
