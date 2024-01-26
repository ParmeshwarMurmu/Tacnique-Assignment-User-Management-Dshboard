import { APP_URL } from "../../Constants/Constants";
import axios from 'axios'

export const ALL_USER_LOADING = 'ALL_USER_LOADING';
export const ALL_USER_SUCCESS = 'ALL_USER_SUCCESS';
export const ALL_USER_ERROR = 'ALL_USER_ERROR';
export const X_TOTAL_COUNT = 'X_TOTAL_COUNT';


export const allUserLoadingAction = ()=>{
    return {type: ALL_USER_LOADING }
}

export const allUserSuccessAction = (payload)=>{
    return {type: ALL_USER_SUCCESS, payload }
}

export const allUserErrorAction = ()=>{
    return {type: ALL_USER_ERROR }
}

export const x_total_countAction = (payload)=>{
    return {type: X_TOTAL_COUNT, payload}
}

export const getAllUserDetails = (pageNumber)=>(dispatch)=>{
    dispatch(allUserLoadingAction())
    axios.get(`${APP_URL}/users?_limit=6&_page=${pageNumber}&_sort=id&_order=desc`)
    .then((res)=>{
        console.log(res.headers['x-total-count']);
        // console.log(res.data);
        const reversedData = res.data;
        dispatch(x_total_countAction(res.headers['x-total-count']))
        dispatch(allUserSuccessAction(reversedData))

    })
    .catch((err)=>{
        console.log(err);
        dispatch(allUserErrorAction())
    })
}