import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = ({ component: Component, isAuthenticated,...rest }) => {
    return (
        <Route
            {...rest}
            render={props => isAuthenticated ? <Redirect to="/panel" />:<Component {...props} /> }
        />
    )
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {})(AuthRoute)