import { GET_DATA_FROM_UNSPLASH, GET_DATA_FROM_UNSPLASH_SUCCESS, GET_DATA_FROM_UNSPLASH_FAILED,GET_DATA_FROM_UNSPLASH_LIST_END, PULL_TO_REFRESH } from '../action';


const initialState = {
    data: [],
    pullToRefresh: false,
};

const unsplashReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA_FROM_UNSPLASH:
      {
            if(action.payload == 1) {
                return {...state, loading: true}
            } else {
                return {...state, moreLoading: true}
            }
        }
        
        case GET_DATA_FROM_UNSPLASH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                moreLoading: false
            };
        case GET_DATA_FROM_UNSPLASH_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
                moreLoading: false
            };  
        case GET_DATA_FROM_UNSPLASH_LIST_END :
            return {
                ...state,
                isListEnd: true,
                loading: false, 
                moreLoading: false
            };
        case PULL_TO_REFRESH : {
            return {
                ...state,
                pullToRefresh: action.payload
            }
        }  
        default:
        return state;
        }
}
export default unsplashReducer;