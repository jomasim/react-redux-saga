import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from './types';

export const registerUser = (payload) => ({
  type: REGISTER_START,
  payload: payload
});

export const registerSuccess = (payload) => {
  return{
  type: REGISTER_SUCCESS,
  payload,
}};

export const registerFail = payload =>{
  console.log(payload)
  return{
  type: REGISTER_ERROR,
  payload,
}};
