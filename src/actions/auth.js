import { 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    LOGOUT_FAIL,
    CHECK_AUTHENTICATION_SUCCESS,
    CHECK_AUTHENTICATION_FAIL 
} from './types'

export const login = (username) => async dispatch => {
    try {
        localStorage.setItem("username", username)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: username
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const check_authentication = () => async dispatch => {
    try {
        if(localStorage.getItem("username")){
            dispatch({
                type: CHECK_AUTHENTICATION_SUCCESS,
                payload: localStorage.getItem("username")
            })
        }
    } catch (error) {
        dispatch({
            type: CHECK_AUTHENTICATION_FAIL
        })
    }
}

export const logout = () => async dispatch => {
    try {
        localStorage.removeItem("username");
        dispatch({
            type: LOGOUT_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL
        })
    }
}