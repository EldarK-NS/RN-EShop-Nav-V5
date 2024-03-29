import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AL } from '../types'

const initialState = {
    token: null,
    userId: null,
    didTryAutoLogin: false
}

export default authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                token: action.token,
                userId: action.userId,
                didTryAutoLogin: true
            }
        case SET_DID_TRY_AL:
            return {
                ...state,
                didTryAutoLogin: true
            }
        case LOGOUT:
            return {
                ...initialState,
                didTryAutoLogin: true
            }
        // case SIGN_UP:
        //     return {
        //         token: action.token,
        //         userId: action.userId
        //     }

        default:
            return state
    }

}