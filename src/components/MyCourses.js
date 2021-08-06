import { Avatar } from '@material-ui/core'
import React from 'react'
import './MyCourses.scss'
import { connect } from 'react-redux'

const MyCourses = ({ mycourses_state }) => {
    return (
        <div className="myCourses__Wrapper">
            {
                mycourses_state.map((val,index)=>{
                    return <div className="myCourses__CourseElement" key={index} >
                                <div className="myCourses__Top">
                                    <img src={val.subjectavatar} alt="logo"/>
                                    <div className={`myCourses__${val.level}`}>
                                        <span>{val.level}</span>
                                        <h6>{val.subject}</h6>
                                    </div>
                                </div>
                                <div className="myCourses__Middle">
                                    <span>by</span>
                                    <Avatar src={val.avatar} />
                                    <p>{val.author}</p>
                                </div>
                                <div className="myCourses__BottomBar">
                                    <p>{val.tasks}</p>
                                    <div className="myCourses__Progress"><div style={{width: `${val.percentage}%`}}></div></div>
                                    <p>{val.percentage}%</p>
                                </div>
                            </div>
                })
            }
        </div>
    )
}

const mapStateToProps = state => ({
    mycourses_state: state.dashboard.courses
})

export default connect(mapStateToProps)(MyCourses)