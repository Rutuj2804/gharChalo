import React from 'react'
import { connect } from 'react-redux'
import RadarChart from './RadarChart'
import './RightSideProgressBar.scss'
import SubjectComponent from './SubjectComponent'

const RightSideProgressBar = ({ homework_state }) => {
    return (
        <div className="rightSideProgressBar__Wrapper">
            <div className="rightSideProgressBar__Bottom">
                <h6>Homework Progress</h6>
                <ul>
                    {homework_state.map((val,index)=>{
                        return <li key={index} > <SubjectComponent title={val.subject} date={val.date} percentage={val.percentage} /> </li>
                    })}
                </ul>
            </div>
            <div className="rightSideProgressBar__Top mt-2">
                <h6>Time Spent on Subject</h6>
                <RadarChart/>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    homework_state: state.dashboard.homework
})

export default connect( mapStateToProps )(RightSideProgressBar)