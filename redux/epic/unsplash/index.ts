import axios from 'axios';
import {ofType} from 'redux-observable';
import {Observable} from 'rxjs';
import {exhaustMap} from 'rxjs/operators';
// @ts-ignore
import globalsettings from '../../../.env.ts'

import { getUnsplashDataFailed, getUnsplashDataSuccess, GET_DATA_FROM_UNSPLASH } from '../../action';

export const unsplashEpic = (action$: any, state$: any) =>
    action$.pipe(
        ofType(GET_DATA_FROM_UNSPLASH),
        exhaustMap((action) => {
            return new Observable((obs) => {
                const execute = axios.get('https://api.unsplash.com/photos?page=1'+"&client_id=" +globalsettings.API_KEY).then((response) => {
                    if(response.data) {
                        obs.next(getUnsplashDataSuccess(response.data))
                        obs.complete()
                        }  
                    }).catch((error)=> {
                        obs.next(getUnsplashDataFailed(error))
                        obs.complete()
                    })
                });
              
        }),
    );