import { Avatar } from '@material-ui/core'
import React from 'react'
import './TaskTab.scss'

const TaskTab = ({ subject, time, date, tag, author, avatar }) => {
    return (
        <div className="taskTab__Wrapper">
            <div className="taskTab__Top">
                <input type="checkbox" />
                <label>{subject}</label>
            </div>
            <div className="taskTab__Middle">
                <p>Due on {time}, {date}</p><span>{tag}</span>
            </div>
            <div className="taskTab__End">
                <Avatar src={avatar} />
                <p>{author}</p>
            </div>
        </div>
    )
}

export default TaskTab
