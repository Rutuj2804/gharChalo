import React from 'react'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

const Chart = ({ time_spent }) => {

    console.log(time_spent)

    return (
        <div>
            <Line
               data={time_spent} 
            />
        </div>
    )
}

const mapStateToProps = state => ({
    time_spent: state.dashboard.time[0]
})

export default connect(mapStateToProps)(Chart)