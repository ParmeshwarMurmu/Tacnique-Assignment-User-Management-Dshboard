import { ALL_USER_ERROR, ALL_USER_LOADING, ALL_USER_SUCCESS, X_TOTAL_COUNT } from "./action"

const initialState = {
    userData: [],
    isLoading: false,
    isError: false,
    errMsg: '',
    x_total_count: 0
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ALL_USER_LOADING:
            return { ...state, isLoading: true }

        case ALL_USER_SUCCESS:
            return { ...state, isLoading: false, userData: payload }

        case ALL_USER_ERROR:
            return { ...state, isLoading: false, isError: true, errMsg: payload }

            case X_TOTAL_COUNT:
                return {...state, x_total_count: payload}

        default:
            return { ...state }
    }
}