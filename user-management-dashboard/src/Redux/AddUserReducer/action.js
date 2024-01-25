

export const USER_FIRST_NAME = 'USER_FIRST_NAME';
export const USER_LAST_NAME = 'USER_LAST_NAME';
export const USER_EMAIL_ADDRESS = 'USER_EMAIL_ADDRESS';
export const USER_DEPARTMENT = 'USER_DEPARTMENT';


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


