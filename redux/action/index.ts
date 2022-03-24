import {IAction} from '../../helper/actionInterface'

export const GET_DATA_FROM_UNSPLASH = 'GET_DATA_FROM_UNSPLASH';
export const GET_DATA_FROM_UNSPLASH_SUCCESS = 'GET_DATA_FROM_UNSPLASH_SUCCESS';
export const GET_DATA_FROM_UNSPLASH_FAILED = 'GET_DATA_FROM_UNSPLASH_FAILED';
export const GET_DATA_FROM_UNSPLASH_LIST_END = 'GET_DATA_FROM_UNSPLASH_LIST_END'

export const getUnsplashData = (payload: any): IAction<any> => ({
    type: GET_DATA_FROM_UNSPLASH,
    payload,
});

export const getUnsplashDataSuccess = (payload: any): IAction<any> => ({
    type: GET_DATA_FROM_UNSPLASH_SUCCESS,
    payload
    
});
export const getUnsplashDataFailed = (error?: any): IAction<any> => ({
    type: GET_DATA_FROM_UNSPLASH_FAILED,
    error
});
export const getUnsplashDataListEnd = (payload: any): IAction<any> => ({
    type: GET_DATA_FROM_UNSPLASH_LIST_END,
    payload
});
