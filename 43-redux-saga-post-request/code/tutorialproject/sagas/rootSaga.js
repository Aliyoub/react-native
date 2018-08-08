// import { delay } from 'redux-saga';
import { call, all, fork } from 'redux-saga/effects';
import { watchFetchMovies } from './movieSagas';
//Add movie
import { watchAddNewMovie } from './movieSagas';

export default function* rootSaga() {
    // yield call(watchFetchMovies);
    // yield all([
    //     watchFetchMovies(),
    // ]);
    yield [
        fork(watchFetchMovies),
        fork(watchAddNewMovie),
    ];           
}