import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../containers/sign-up/types';
import { registerFail, registerSuccess } from '../containers/sign-up/actions';
import axios from 'axios';

function * register ({ payload }) {
  console.log({ user: payload })
  try {
    const response = yield call(axios.post, 'http://127.0.0.1:8000/api/v1/users/', { user: payload });
    yield put({
      type: types.REGISTER_SUCCESS,
      payload: { user: response.data.user }
    });
  } catch (err) {
    console.log(err.response.data.errors);
    yield put({
      type: types.REGISTER_ERROR,
      payload: { errors: err.response.data.errors }
    });
  }
}

function * watchRegister () {
  yield takeEvery(types.REGISTER_START, register);
}

export default watchRegister;
