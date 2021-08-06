import { 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    LOGOUT_FAIL,
    CHECK_AUTHENTICATION_SUCCESS,
    CHECK_AUTHENTICATION_FAIL 
} from '../actions/types'

const inititalState = {
    username: "",
    isAuthenticated: false
}

export default function auth(state= inititalState, action){
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                username: payload,
                isAuthenticated: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                username: '',
                isAuthenticated: false
            }
        case CHECK_AUTHENTICATION_SUCCESS:
            return {
                ...state,
                username: payload,
                isAuthenticated: true
            }
        case CHECK_AUTHENTICATION_FAIL:
        case LOGOUT_FAIL:
        case LOGIN_FAIL:
        default:
            return state;
    }
}