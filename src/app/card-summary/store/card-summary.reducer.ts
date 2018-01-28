//import { AnimalAPIAction, AnimalAPIActions } from './actions';
import { CardSummaryAction, CardSummaryActions } from './card-summary.actions';
//import { IAnimalList, AnimalType } from '../model';
import { ICardSummaryList } from './card-summary.model';
import { indexBy, prop } from 'ramda';
import { Action } from 'redux';

const initialState: ICardSummaryList = {
    items: {},
    loading: false,
    error: null
};

export function cardSummaryReducer(state: ICardSummaryList = initialState, a: Action): ICardSummaryList {
    const action = a as CardSummaryAction;

    // if (!action.meta /*|| action.meta.animalType !== animalType*/) {
    //     return state;
    // }

    switch (action.type) {
        case CardSummaryActions.LOAD_STARTED:
            return {
                ...state, // makes sure rest of state is passed through - necessary?
                items: {},
                loading: true,
                error: null
            };
        case CardSummaryActions.LOAD_SUCCEEDED:
            return {
                ...state,
                items: indexBy(prop('name'), action.payload),
                loading: false,
                error: null
            };
        case CardSummaryActions.LOAD_FAILED:
            return {
                ...state,
                items: {},
                loading: false,
                error: action.error
            }
    }

    return state;
}