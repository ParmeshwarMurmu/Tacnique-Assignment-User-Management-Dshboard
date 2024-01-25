import { EDIT_USER_DEPARTMENT, EDIT_USER_EMAIL_ADDRESS, EDIT_USER_ERROR, EDIT_USER_FIRST_NAME, EDIT_USER_LAST_NAME, EDIT_USER_LOADING, EDIT_USER_SUCCESS } from "./action"


const initialState = {
    editFirstName: '',
    editLastName: '',
    editEmail: '',
    editDepartment: '',
    editIsLoading: false,
    editIsError: false,
    editErrMsg: '',
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case EDIT_USER_FIRST_NAME:
            return { ...state, editFirstName: payload }

        case EDIT_USER_LAST_NAME:
            return { ...state, editLastName: payload }

        case EDIT_USER_EMAIL_ADDRESS:
            return { ...state, editEmail: payload }

        case EDIT_USER_DEPARTMENT:
            return { ...state, editDepartment: payload }

        case EDIT_USER_LOADING:
            return { ...state, editIsLoading: true }

        case EDIT_USER_SUCCESS:
            return { ...state, editIsLoading: false }

        case EDIT_USER_ERROR:
            return { ...state, editIsError: true, editIsLoading: false, editErrMsg: payload }

        default:
            return { ...state }
    }
}