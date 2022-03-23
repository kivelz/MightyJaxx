import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from '../redux/epic';
import unsplashReducer from '../redux/reducers';


const epicMiddleware = createEpicMiddleware();

export const configureStore = () => {
    const middlewares: any = [epicMiddleware];
    
 
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(...middlewares)),
    );

    epicMiddleware.run(rootEpic);

    return store;
};
export const appReducer = combineReducers({
  unsplashReducer
});

export const rootReducer = (state: any, action: any) => {
  // const newState = { ...state };
  return appReducer(state, action);
};