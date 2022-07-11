import { all } from 'redux-saga/effects';
import blockSaga from './blockSaga';
import createSaga from './createSaga';

import latestSaga from './latestSaga';
import txSaga from './txSaga';
import accountSaga from './accountSaga';


export default function* rootSaga() {

    yield all([
        latestSaga(), blockSaga(), txSaga(), createSaga(), accountSaga()
    ])
}