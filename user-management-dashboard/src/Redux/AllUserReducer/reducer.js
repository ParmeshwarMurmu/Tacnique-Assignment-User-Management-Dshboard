import { ALL_USER_ERROR, ALL_USER_LOADING, ALL_USER_SUCCESS } from "./action"

const initialState = {
    userData: [],
    isLoding: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ALL_USER_LOADING:
            return { ...state, isLoding: true }

        case ALL_USER_SUCCESS:
            return { ...state, isLoding: false, userData: payload }

        case ALL_USER_ERROR:
            return { ...state, isLoding: false, isError: true }

        default:
            return { ...state }
    }
}