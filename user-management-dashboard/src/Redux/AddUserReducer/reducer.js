import { USER_DEPARTMENT, USER_EMAIL_ADDRESS, USER_FIRST_NAME, USER_LAST_NAME } from "./action"


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    department: ''
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case USER_FIRST_NAME:
            return { ...state, firstName: payload }

        case USER_LAST_NAME:
            return { ...state, LastName: payload }

        case USER_EMAIL_ADDRESS:
            return { ...state, email: payload }

        case USER_DEPARTMENT:
            return { ...state, department: payload }

        default:
            return { ...state }
    }
}