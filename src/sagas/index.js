import { all, fork } from 'redux-saga/effects';
import updateCountSaga from './sagas';
import registerSaga from './signUp'
import watchRegister from './signUp';


export default function * rootSaga () {
  yield all([
    fork(updateCountSaga),
    fork(watchRegister),
  ]);
}
