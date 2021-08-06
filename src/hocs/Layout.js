import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { 
    homework,
    upcoming_lessons,
    leaderboard,
    mycourses,
    tasks,
    time_spend
} from '../actions/dashboard'
import { check_authentication } from '../actions/auth'
import './Layout.scss'

const Layout = ({children, homework, upcoming_lessons, leaderboard, mycourses, tasks, time_spend, isAuthenticated, check_authentication }) => {

    useEffect(()=>{
        homework();
        upcoming_lessons();
        leaderboard();
        mycourses();
        tasks();
        time_spend();
        check_authentication();
    }, [homework, upcoming_lessons, leaderboard, mycourses, tasks, time_spend, isAuthenticated, check_authentication])

    return (
        <>
            {isAuthenticated?<Navbar/>:null}
            <div className="layout__Wrapper">{children}</div>
        </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { homework, upcoming_lessons, leaderboard, mycourses, tasks, time_spend, check_authentication})(Layout)