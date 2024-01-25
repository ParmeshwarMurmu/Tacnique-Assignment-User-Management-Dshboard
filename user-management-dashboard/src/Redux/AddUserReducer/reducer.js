import { ADD_USER_ERROR, ADD_USER_LOADING, ADD_USER_SUCCESS, USER_DEPARTMENT, USER_EMAIL_ADDRESS, USER_FIRST_NAME, USER_LAST_NAME } from "./action"


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    isLoading: false,
    isError: false,
    errMsg: '',
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case USER_FIRST_NAME:
            return { ...state, firstName: payload }

        case USER_LAST_NAME:
            return { ...state, lastName: payload }

        case USER_EMAIL_ADDRESS:
            return { ...state, email: payload }

        case USER_DEPARTMENT:
            return { ...state, department: payload }

        case ADD_USER_LOADING:
            return {...state, isLoading: true}

            case ADD_USER_SUCCESS:
                return {...state, isLoading: false}

                case ADD_USER_ERROR:
                    return {...state, isError: true, isLoading: false, errMsg: payload}

        default:
            return { ...state }
    }
}