import axios from 'axios'
import { APP_URL } from '../../Constants/Constants'

// VARIABLES TO EDIT USER CREDENTIALS

export const EDIT_USER_FIRST_NAME = 'EDIT_USER_FIRST_NAME';
export const EDIT_USER_LAST_NAME = 'EDIT_USER_LAST_NAME';
export const EDIT_USER_EMAIL_ADDRESS = 'EDIT_USER_EMAIL_ADDRESS';
export const EDIT_USER_DEPARTMENT = 'EDIT_USER_DEPARTMENT';
export const EDIT_USER_LOADING = 'EDIT_USER_LOADING'
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'
export const EDIT_USER_ERROR = 'EDIT_USER_ERROR'
export const EDIT_USER_RESET = 'EDIT_USER_RESET'


// ACTION TYPE FOR USER EDIT FIRST NAME

export const editUserFirstNameAction = (payload)=>{
    return {type: EDIT_USER_FIRST_NAME, payload}
}



// ACTION TYPE FOR USER EDIT LAST NAME

export const editUserLastNameAction = (payload)=>{
    return {type: EDIT_USER_LAST_NAME, payload}
}


// ACTION TYPE FOR USER EDIT EMAIL ADDRESS

export const editUserEmailAddressAction = (payload)=>{
    return {type: EDIT_USER_EMAIL_ADDRESS, payload}
}


// ACTION TYPE FOR USER EDIT DEPARTMENRT

export const editUserDepartmentAction = (payload)=>{
    return {type: EDIT_USER_DEPARTMENT, payload}
}

// ACTION TYPE FOR USER EDIT LOADING 

export const editUserLoadingAction = ()=>{
    return {type: EDIT_USER_LOADING}
}


// ACTION TYPE FOR USER EDIT SUCCESS

export const editUserSuccessAction = ()=>{
    return {type: EDIT_USER_SUCCESS}
}


// ACTION TYPE FOR USER EDIT ERROR

export const editUserErrorAction = (payload)=>{
    return {type: EDIT_USER_ERROR, payload}
}

// ACTION TYPE FOR RESET USER EDIT 

export const editUserResetAction = ()=>{
    return {type: EDIT_USER_RESET}
}



// FUNCTION TO SAVE USER CREDENTIAL AFTER EDIT

export const saveUserEditedDetails = (updateInfo, id)=>(dispatch)=>{
    dispatch(editUserLoadingAction())
    return axios.patch(`${APP_URL}/users/${id}`, updateInfo)
    .then((res)=>{
    //   console.log(res);
      dispatch(editUserSuccessAction())
    })
    .catch((err)=>{
      console.log(err);
      dispatch(editUserErrorAction(err.message))
    })
}