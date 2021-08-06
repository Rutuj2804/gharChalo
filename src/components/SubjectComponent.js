import React from 'react'
import './SubjectComponent.scss'

const SubjectComponent = ({ title, date, percentage }) => {
    return (
        <div className="subjectComponent__Wrapper">
            <div className="subjectComponent__Left" >
                <h6>{title}</h6>
                <p>{date}</p>
            </div>
            <div className="subjectComponent__Right">
                <p>{percentage}%</p>
            </div>
        </div>
    )
}

export default SubjectComponent
