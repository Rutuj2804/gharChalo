import { Avatar } from '@material-ui/core'
import React from 'react'
import './LessionsTab.scss'

const LessionsTab = ({ subject, date, time, author, avatar }) => {
    return (
        <div className="lessionsTab__Wrapper">
            <div className="lessionsTab__Left">
                <div className="lessionsTab__Date">
                    <h2>{date}</h2>
                    <p>{time}</p>
                </div>
                <div className="lessionsTab__Names">
                    <h6>{subject}</h6>
                    <p>{author}</p>
                </div>
            </div> 
            <div className="lessionsTab__Right">
                <Avatar src={avatar} />
            </div> 
        </div>
    )
}

export default LessionsTab
