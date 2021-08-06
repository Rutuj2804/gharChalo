import axios from 'axios'
import { 
    HOMEWORK_PROGRESS_FETCH_SUCCESS,
    HOMEWORK_PROGRESS_FETCH_FAIL,
    UPCOMING_LESSONS_FETCH_SUCCESS,
    UPCOMING_LESSONS_FETCH_FAIL,
    LEADERBOARD_FETCH_SUCCESS,
    LEADERBOARD_FETCH_FAIL,
    MYCOURSES_FETCH_SUCCESS,
    MYCOURSES_FETCH_FAIL,
    TASKS_FETCH_SUCCESS,
    TASKS_FETCH_FAIL,
    TIME_SPEND_FETCH_SUCCESS,
    TIME_SPEND_FETCH_FAIL
} from './types'
import moment from 'moment'

export const homework = () => async dispatch => {
    
    const config = {
        headers: {
            "Content-Type": "Application/json"
        }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}homework/`, config);
        if(res.data.success){
            dispatch({
                type: HOMEWORK_PROGRESS_FETCH_SUCCESS,
                payload: res.data.data
            })
        } else {
            dispatch({
                type: HOMEWORK_PROGRESS_FETCH_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: HOMEWORK_PROGRESS_FETCH_FAIL
        })
    }

}

export const upcoming_lessons = () => async dispatch => {
    
    const config = {
        headers: {
            "Content-Type": "Application/json"
        }
    }

    
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}lessons/`, config);
        if(res.data.success){
            dispatch({
                type: UPCOMING_LESSONS_FETCH_SUCCESS,
                payload: res.data.data
            })
        } else {
            dispatch({
                type: UPCOMING_LESSONS_FETCH_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: UPCOMING_LESSONS_FETCH_FAIL
        })
    }

}

export const leaderboard = () => async dispatch => {
    
    const config = {
        headers: {
            "Content-Type": "Application/json"
        }
    }

    
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}leaderboard/`, config);
        if(res.data.success){
            dispatch({
                type: LEADERBOARD_FETCH_SUCCESS,
                payload: res.data.data
            })
        } else {
            dispatch({
                type: LEADERBOARD_FETCH_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: LEADERBOARD_FETCH_FAIL
        })
    }

}

export const mycourses = () => async dispatch => {
    
    const config = {
        headers: {
            "Content-Type": "Application/json"
        }
    }

    
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}mycourses/`, config);
        if(res.data.success){
            dispatch({
                type: MYCOURSES_FETCH_SUCCESS,
                payload: res.data.data
            })
        } else {
            dispatch({
                type: MYCOURSES_FETCH_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: MYCOURSES_FETCH_FAIL
        })
    }

}

export const tasks = () => async dispatch => {
    
    const config = {
        headers: {
            "Content-Type": "Application/json"
        }
    }

    
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}tasks/`, config);
        if(res.data.success){
            dispatch({
                type: TASKS_FETCH_SUCCESS,
                payload: res.data.data
            })
        } else {
            dispatch({
                type: TASKS_FETCH_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: TASKS_FETCH_FAIL
        })
    }

}

export const time_spend = () => async dispatch => {
    
    const config = {
        headers: {
            "Content-Type": "Application/json"
        }
    }

    
    try {
        const res = await axios.get(`${process.env.REACT_APP_TIME_SPEND_URL}`, config);

        const data =[];
        const labels=[];

        for(var i=0; i<res.data.length; i++){
            data.unshift(res.data[i].close)
            labels.unshift(moment(res.data[i].date).format("LT"))

            if(i===15){
                break;
            }
        }

        if(res.data){
            dispatch({
                type: TIME_SPEND_FETCH_SUCCESS,
                payload: {
                    data,
                    labels
                }
            })
        } else {
            dispatch({
                type: TIME_SPEND_FETCH_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: TIME_SPEND_FETCH_FAIL
        })
    }

}