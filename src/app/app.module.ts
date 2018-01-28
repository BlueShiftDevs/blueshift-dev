import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardSummaryModule } from './card-summary/card-summary.module';
import { StoreModule } from './store/store.module';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgReduxModule,
    NgReduxRouterModule,
    CardSummaryModule,
    StoreModule
  ],
  providers: [NgReduxRouter],
  bootstrap: [AppComponent]
})
export class AppModule { }
