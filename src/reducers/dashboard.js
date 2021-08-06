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
} from '../actions/types'

const inititalState = {
    homework: [],
    lessons: [],
    leaderboard: [],
    courses: [],
    tasks: [],
    time: [{
        labels: [],
        datasets: [{
            label: 'Time Spent',
            data: [],
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.1
        }]
    } ],
}

export default function dashboard(state= inititalState, action){
    const { type, payload } = action;

    switch (type) {
        case HOMEWORK_PROGRESS_FETCH_SUCCESS:
            return {
                ...state,
                homework: payload
            }
        case UPCOMING_LESSONS_FETCH_SUCCESS:
            return {
                ...state,
                lessons: payload
            }
        case LEADERBOARD_FETCH_SUCCESS:
            return {
                ...state,
                leaderboard: payload
            }
        case MYCOURSES_FETCH_SUCCESS:
            return {
                ...state,
                courses: payload
            }
        case TASKS_FETCH_SUCCESS:
            return {
                ...state,
                tasks: payload
            }
        case TIME_SPEND_FETCH_SUCCESS:
            return {
                ...state,
                time: [{
                        labels: payload.labels,
                        datasets: [{
                            label: 'Time Spent',
                            data: payload.data,
                            fill: false,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            tension: 0.1
                        }]
                    } ]
            }
        case HOMEWORK_PROGRESS_FETCH_FAIL:
        case UPCOMING_LESSONS_FETCH_FAIL:
        case LEADERBOARD_FETCH_FAIL:
        case MYCOURSES_FETCH_FAIL:
        case TASKS_FETCH_FAIL:
        case TIME_SPEND_FETCH_FAIL:
        default:
            return state;
    }
}