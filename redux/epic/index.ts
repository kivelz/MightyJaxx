import { combineEpics } from 'redux-observable';
import { unsplashEpic } from './unsplash';

export const rootEpic = combineEpics(
   unsplashEpic
);
