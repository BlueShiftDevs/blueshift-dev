import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { ICardSummaryList, ICardSummary } from './card-summary.model';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = ICardSummary[];
interface MetaData { };
export type CardSummaryAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class CardSummaryActions {
    static readonly LOAD_CARDS = 'LOAD_CARDS';
    static readonly LOAD_STARTED = 'LOAD_STARTED';
    static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
    static readonly LOAD_FAILED = 'LOAD_FAILED';

    @dispatch()
    loadCards = (): CardSummaryAction => ({
        type: CardSummaryActions.LOAD_CARDS,
        meta: {},
        payload: null,
    });

    loadStarted = (): CardSummaryAction => ({
        type: CardSummaryActions.LOAD_STARTED,
        meta: {},
        payload: null,
    })

    loadSucceeded = (payload: Payload): CardSummaryAction => ({
        type: CardSummaryActions.LOAD_SUCCEEDED,
        meta: {},
        payload,
    })

    loadFailed = (error): CardSummaryAction => ({
        type: CardSummaryActions.LOAD_FAILED,
        meta: {},
        payload: null,
        error,
    })
}