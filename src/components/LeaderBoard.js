import { Avatar } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import './LeaderBoard.scss'

const LeaderBoard = ({ leaderboard_state }) => {
    return (
        <div className="leaderBoard__Wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="text-center" >Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col" className="text-center" >Best Score</th>
                        <th scope="col" className="text-center" >Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard_state.map((val, index)=>{
                        return <tr key={index} >
                                    <th scope="row" className="text-center" >{val.rank}</th>
                                    <td className="d-flex align-items-center" > <Avatar src={val.avatar} /> <p className="m-0 mx-2" >{val.user}</p></td>
                                    <td className="text-center" >{val.bestscore}</td>
                                    <td className="text-center" >{val.points}</td>
                                </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    leaderboard_state: state.dashboard.leaderboard
})

export default connect(mapStateToProps)(LeaderBoard)