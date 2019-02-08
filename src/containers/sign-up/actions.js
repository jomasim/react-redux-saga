import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "./types";
import axios from 'axios'

export const registrationStarted = () => ({
    type: REGISTER_START
});

export const registerSuccess = payload => ({
    type: REGISTER_SUCCESS,
    payload,

});

export const registerFail = payload => ({
    type: REGISTER_ERROR,
    payload,
})

const registerAction = userData => (dispatch) => {

    dispatch(registrationStarted());
    axios.post('https://ah-robotics-staging.herokuapp.com/api/v1/users/', userData.then(
        res =>{
            console.log(res.data)
            dispatch(registerSuccess(res.data.user))
        }
    )).catch(
        error =>{
            dispatch(registerFail(error))
        });


};

export default registerAction;