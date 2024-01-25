import axios from 'axios'
import { APP_URL } from '../../Constants/Constants'

export const USER_FIRST_NAME = 'USER_FIRST_NAME';
export const USER_LAST_NAME = 'USER_LAST_NAME';
export const USER_EMAIL_ADDRESS = 'USER_EMAIL_ADDRESS';
export const USER_DEPARTMENT = 'USER_DEPARTMENT';
export const ADD_USER_LOADING = 'ADD_USER_LOADING'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_ERROR = 'ADD_USER_ERROR'

// ACTION TYPE FOR USER FIRST NAME

export const userFirstNameAction = (payload)=>{
    return {type: USER_FIRST_NAME, payload}
}



// ACTION TYPE FOR USER LAST NAME

export const userLastNameAction = (payload)=>{
    return {type: USER_LAST_NAME, payload}
}


// ACTION TYPE FOR USER EMAIL ADDRESS

export const userEmailAddressAction = (payload)=>{
    return {type: USER_EMAIL_ADDRESS, payload}
}


// ACTION TYPE FOR USER DEPARTMENRT

export const userDepartmentAction = (payload)=>{
    return {type: USER_DEPARTMENT, payload}
}


export const addUserLoadingAction = ()=>{
    return {type: ADD_USER_LOADING}
}


export const addUserSuccessAction = ()=>{
    return {type: ADD_USER_SUCCESS}
}

export const addUserErrorAction = ()=>{
    return {type: ADD_USER_ERROR}
}


export const addUser = (userData)=>(dispatch)=>{
    dispatch(addUserLoadingAction())
    return axios.post(`${APP_URL}/users`, userData)
    .then((res)=>{
    //   console.log(res);
      dispatch(addUserSuccessAction())
    })
    .catch((err)=>{
      console.log(err);
      dispatch(addUserErrorAction(err.message))
    })
}