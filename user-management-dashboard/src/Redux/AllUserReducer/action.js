import { APP_URL } from "../../Constants/Constants";
import axios from 'axios'

// VARIABLES FOR TO GET ALL USERS DETAILS

export const ALL_USER_LOADING = 'ALL_USER_LOADING';
export const ALL_USER_SUCCESS = 'ALL_USER_SUCCESS';
export const ALL_USER_ERROR = 'ALL_USER_ERROR';
export const X_TOTAL_COUNT = 'X_TOTAL_COUNT';


// ACTION TYPE ALL USER lOADING ACTION

export const allUserLoadingAction = ()=>{
    return {type: ALL_USER_LOADING }
}


// ACTION TYPE ALL USER SUCCESS ACTION

export const allUserSuccessAction = (payload)=>{
    return {type: ALL_USER_SUCCESS, payload }
}


// ACTION TYPE ALL USER ERROR ACTION

export const allUserErrorAction = ()=>{
    return {type: ALL_USER_ERROR }
}


// ACTION TYPE TO GET TOTAL DATA PRESENT IN THE SERVER 

export const x_total_countAction = (payload)=>{
    return {type: X_TOTAL_COUNT, payload}
}


// FUNCTION TO GET ALL USERS DATA PRESENT IN SERVER

export const getAllUserDetails = (pageNumber)=>(dispatch)=>{
    dispatch(allUserLoadingAction())
    axios.get(`${APP_URL}/users?_limit=6&_page=${pageNumber}&_sort=id&_order=desc`)
    .then((res)=>{
        // console.log(res.headers['x-total-count']);
        // console.log(res.data);
        const reversedData = res.data;
        dispatch(x_total_countAction(res.headers['x-total-count']))
        dispatch(allUserSuccessAction(reversedData))

    })
    .catch((err)=>{
        console.log(err);
        dispatch(allUserErrorAction(err.message))
    })
}