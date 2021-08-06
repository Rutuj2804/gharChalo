import React from 'react'
import LessionsTab from './LessionsTab'
import './LeftSideComponent.scss'
import TaskTab from './TaskTab'
import { connect } from 'react-redux'

const LeftSideComponent = ({ lessons_state, tasks_state }) => {
    return (
        <div className="leftSideComponent__Wrapper" >
            <div className="leftSideComponent__Top">
                <h6>Upcoming Lessons</h6>
                <ul>
                    {
                        lessons_state.map((val,index) => {
                            return <li key={index} ><LessionsTab
                                                        subject={val.subject}
                                                        date={val.date}
                                                        time={val.time}
                                                        author={val.author}
                                                        avatar={val.avatar}
                                                    /></li>
                        })
                    }
                </ul>
            </div>
            <div className="leftSideComponent__Middle">
                <h6>Tasks</h6>
                <ul>
                    {
                        tasks_state.map((val, index)=>{
                            return <li key={index} ><TaskTab subject={val.subject} date={val.date} time={val.time} author={val.author} tag={val.tag} avatar={val.avatar} /></li>
                        })
                    }
                    
                </ul>
                <div className="text-center leftSideComponent__SeeAll"><span>See All</span></div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    lessons_state: state.dashboard.lessons,
    tasks_state: state.dashboard.tasks
})

export default connect(mapStateToProps)(LeftSideComponent)