import {IAction} from '../../helper/actionInterface'

export const GET_DATA_FROM_UNSPLASH = 'GET_DATA_FROM_UNSPLASH';
export const GET_DATA_FROM_UNSPLASH_SUCCESS = 'GET_DATA_FROM_UNSPLASH_SUCCESS';
export const GET_DATA_FROM_UNSPLASH_FAILED = 'GET_DATA_FROM_UNSPLASH_FAILED';

export const getUnsplashData = (): IAction<any> => ({
    type: GET_DATA_FROM_UNSPLASH
});

export const getUnsplashDataSuccess = (payload: any): IAction<any> => ({
    type: GET_DATA_FROM_UNSPLASH_SUCCESS,
    payload
    
});
export const getUnsplashDataFailed = (error?: any): IAction<any> => ({
    type: GET_DATA_FROM_UNSPLASH_FAILED,
    error
});
