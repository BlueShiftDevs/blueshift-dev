import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ICardSummary } from './card-summary.model';

// A fake API on the internets.
// const URLS = {
//   [ANIMAL_TYPES.ELEPHANT]: 'http://www.mocky.io/v2/59200c34110000ce1a07b598',
//   [ANIMAL_TYPES.LION]: 'http://www.mocky.io/v2/5920141a25000023015998f2',
// };

@Injectable()
export class CardSummaryService {
    constructor(private http: Http) { }

    getAll = (): Observable<ICardSummary[]> =>
        //this.http.get(URLS[animalType])
        //.map(resp => resp.json())
        //.map(records => records.map(fromServer));
        Observable.of([
            { name: 'Susie Orbit', id: '001' },
            { name: 'Laser Array', id: '002' },
            { name: 'Into the Void', id: '003' },
            { name: 'Economy of Scale', id: '004' },
            { name: 'Galactic Designs', id: '005' },
        ]);
}