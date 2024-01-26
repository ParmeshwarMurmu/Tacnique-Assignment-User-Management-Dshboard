import axios from 'axios'
import { APP_URL } from '../../Constants/Constants'

// VRIABLES

export const USER_FIRST_NAME = 'USER_FIRST_NAME';
export const USER_LAST_NAME = 'USER_LAST_NAME';
export const USER_EMAIL_ADDRESS = 'USER_EMAIL_ADDRESS';
export const USER_DEPARTMENT = 'USER_DEPARTMENT';
export const ADD_USER_LOADING = 'ADD_USER_LOADING'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_ERROR = 'ADD_USER_ERROR'
export const ADD_USER_RESET = 'ADD_USER_RESET'


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

// ACTION TYPE FOR ADD USER lOADING ACTION


export const addUserLoadingAction = ()=>{
    return {type: ADD_USER_LOADING}
}

// ACTION TYPE FOR ADD USER SUCCESS ACTION

export const addUserSuccessAction = ()=>{
    return {type: ADD_USER_SUCCESS}
}

// ACTION TYPE FOR ADD USER ERROR ACTION

export const addUserErrorAction = ()=>{
    return {type: ADD_USER_ERROR}
}

// ACTION TYPE FOR USER RESET ACTION

export const addUserResetAction = ()=>{
    return {type: ADD_USER_RESET}
}


// FUNCTION TO ADD USER WITH CREDENTIALS

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