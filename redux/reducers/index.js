import { GET_DATA_FROM_UNSPLASH, GET_DATA_FROM_UNSPLASH_SUCCESS, GET_DATA_FROM_UNSPLASH_FAILED } from '../action';


const initialState = {
data: {}
};

const unsplashReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA_FROM_UNSPLASH:
        return {
        ...state,
        isLoading: false,
            
        };
        case GET_DATA_FROM_UNSPLASH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case GET_DATA_FROM_UNSPLASH_FAILED:
            return {
                ...state,
                isLoading: false,
                data: {}
            };    
        default:
        return state;
        }
}
export default unsplashReducer;