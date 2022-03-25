import axios from 'axios';
import {ofType} from 'redux-observable';
import {Observable} from 'rxjs';
import {exhaustMap} from 'rxjs/operators';
// @ts-ignore
import globalsettings from '../../../.env.ts'
import { getUnsplashDataFailed, getUnsplashDataListEnd, getUnsplashDataSuccess, GET_DATA_FROM_UNSPLASH, pullToRefresh } from '../../action';

const endPoint = 'https://api.unsplash.com/photos';

export const unsplashEpic = (action$: any, state$: any) =>
    action$.pipe(
        ofType(GET_DATA_FROM_UNSPLASH),
        exhaustMap((action:any) => {
            return new Observable((obs) => {         
                axios.get(endPoint ,{params: { page: action.payload, client_id: globalsettings.API_KEY}}).then((response) => {
                    if(response.data) {
                        const previousData = state$.value.unsplashReducer.data;
                        const itemData = response.data ;
                        const isPullToRefresh = state$.value.unsplashReducer.pullToRefresh;
                        
                        if(isPullToRefresh) {
                            obs.next(getUnsplashDataSuccess([...itemData]));
                           obs.next(pullToRefresh(false))
                            obs.complete()
                        } else {
                            obs.next(getUnsplashDataSuccess([...previousData, ...itemData]));
                            obs.complete()
                        }
                      
                    }  else {
                        obs.next(getUnsplashDataListEnd(true))
                        obs.complete();
                    }                  
                }).catch((error)=> {
                    obs.next(getUnsplashDataFailed(error))
                    obs.complete()
                })
            });
        }),
    );