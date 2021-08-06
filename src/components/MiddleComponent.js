import React from 'react'
import Chart from './Chart'
import LeaderBoard from './LeaderBoard'
import './MiddleComponent.scss'
import MyCourses from './MyCourses'

const MiddleComponent = () => {
    return (
        <div className="middleComponent__Wrapper">
            <div className="middleComponent__Chart">
                <h6>Spend Time</h6>
                <Chart/>
            </div>
            <div className="middleComponent__LeaderBoard">
                <h6>Leader Board</h6>
                <LeaderBoard/>
            </div>
            <div className="middleComponent__MyCourses">
                <h6>My Courses </h6>
                <MyCourses/>
            </div>
        </div>
    )
}

export default MiddleComponent