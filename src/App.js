import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import './App.scss'
import Layout from './hocs/Layout'
import Login from './pages/Login'
import PrivateRoute from './hocs/PrivateRoute'
import store from './store'
import Dashboard from './pages/Dashboard'
import AuthRoute from './hocs/AuthRoute'
import Home from './pages/Home'
import Enrollment from './pages/Enrollment'
import Forum from './pages/Forum'
import Achievements from './pages/Achievements'
import Bookmarks from './pages/Bookmarks'

const App = () => {
    return (
        <Provider store={store} >
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <PrivateRoute exact path="/panel" component={Dashboard} />
                        <PrivateRoute exact path="/home" component={Home} />
                        <PrivateRoute exact path="/enrollments" component={Enrollment} />
                        <PrivateRoute exact path="/achievements" component={Achievements} />
                        <PrivateRoute exact path="/forum" component={Forum} />
                        <PrivateRoute exact path="/bookmark" component={Bookmarks} />
                        <AuthRoute exact path="/" component={Login} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Provider>
    )
}

export default App
