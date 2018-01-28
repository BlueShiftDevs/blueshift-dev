import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

import { IAppState } from '../../store/store.model';
//import { AnimalType } from './card-summary.model';
import { CardSummaryAction, CardSummaryActions } from './card-summary.actions';
import { CardSummaryService } from './card-summary.service';

// const animalsNotAlreadyFetched = (
//     animalType: AnimalType,
//     state: IAppState): boolean => !(
//         state[animalType] &&
//         state[animalType].items &&
//         Object.keys(state[animalType].items).length);

// const actionIsForCorrectAnimalType = (animalType: AnimalType) =>
//     (action: AnimalAPIAction): boolean =>
//         action.meta.animalType === animalType;

@Injectable()
export class CardSummaryEpics {
    constructor(
        private service: CardSummaryService,
        private actions: CardSummaryActions,
    ) { }

    // public createEpic() {
    //     return createEpicMiddleware((action$, store) => {

    //     });
    // }

    // private createLoadAnimalEpic(animalType: AnimalType): Epic<AnimalAPIAction, IAppState> {
    //     return (action$, store) => action$
    //         .ofType(AnimalAPIActions.LOAD_ANIMALS)
    //         .filter(action => actionIsForCorrectAnimalType(animalType)(action))
    //         .filter(() => animalsNotAlreadyFetched(animalType, store.getState()))
    //         .switchMap(() => this.service.getAll(animalType)
    //             .map(data => this.actions.loadSucceeded(animalType, data))
    //             .catch(response => of(this.actions.loadFailed(animalType, {
    //                 status: '' + response.status,
    //             })))
    //             .startWith(this.actions.loadStarted(animalType)));
    // }
}