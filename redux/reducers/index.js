import { GET_DATA_FROM_UNSPLASH, GET_DATA_FROM_UNSPLASH_SUCCESS, GET_DATA_FROM_UNSPLASH_FAILED,GET_DATA_FROM_UNSPLASH_LIST_END } from '../action';


const initialState = {
    data: []
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
            }  
        default:
        return state;
        }
}
export default unsplashReducer;