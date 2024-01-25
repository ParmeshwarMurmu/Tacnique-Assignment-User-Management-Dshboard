import { APP_URL } from "../../Constants/Constants";
import axios from 'axios'

export const ALL_USER_LOADING = 'ALL_USER_LOADING';
export const ALL_USER_SUCCESS = 'ALL_USER_SUCCESS';
export const ALL_USER_ERROR = 'ALL_USER_ERROR';

export const allUserLoadingAction = ()=>{
    return {type: ALL_USER_LOADING }
}

export const allUserSuccessAction = (payload)=>{
    return {type: ALL_USER_SUCCESS, payload }
}

export const allUserErrorAction = ()=>{
    return {type: ALL_USER_ERROR }
}

export const getAllUserDetails = ()=>(dispatch)=>{
    dispatch(allUserLoadingAction())
    axios.get(`${APP_URL}/users`)
    .then((res)=>{
        console.log(res);
        console.log(res.data);

    })
    .catch((err)=>{
        console.log(err);
        dispatch(allUserErrorAction())
    })
}