import React from 'react'
import LeftSideComponent from '../components/LeftSideComponent'
import MiddleComponent from '../components/MiddleComponent'
import RightSideProgressBar from '../components/RightSideProgressBar'
import "./Dashboard.scss"

const Dashboard = () => {
    return (
        <div className="dashboard__Wrapper">
            <RightSideProgressBar/>
            <MiddleComponent/>
            <LeftSideComponent/>
        </div>
    )
}

export default Dashboard
