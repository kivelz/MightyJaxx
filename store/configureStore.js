import { createStore, combineReducers } from 'redux';
import unsplashReducer from '../redux/reducers';

const rootReducer = combineReducers(
    { data: unsplashReducer }
    );
    const configureStore = () => {
    return createStore(rootReducer);
    }
export default configureStore;