import { Avatar, IconButton } from '@material-ui/core'
import { Bookmark, Dashboard, Forum, Home, Notes, NotificationsRounded, Search, Stars, Subscriptions } from '@material-ui/icons'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../actions/auth'
import user_avatar from '../images/avatar.png'
import './Navbar.scss'

const Navbar = ({ logout, username }) => {

    const history = useHistory();

    const [ navigtaionControl, setNavigationControl ] = useState('panel');

    const handleLogoutFun = () =>{
        logout();
        history.push('/');
    }

    const handleNavigation = (props) =>{
        setNavigationControl(props);
        history.replace(`${props}`)
    }

    return (
        <div className="navbar__Wrapper" >
            <div className="navbar__SideBar">
                <div className="navbar__MenuButton">
                    <Notes/>
                </div>
                <ul>
                    <li className={navigtaionControl==="home"?"current":""}><IconButton onClick={()=>handleNavigation('home')} ><Home/></IconButton></li>
                    <li className={navigtaionControl==="panel"?"current":""}><IconButton onClick={()=>handleNavigation('panel')} ><Dashboard/></IconButton></li>
                    <li className={navigtaionControl==="enrollments"?"current":""}><IconButton onClick={()=>handleNavigation('enrollments')} ><Subscriptions/></IconButton></li>
                    <li className={navigtaionControl==="achievements"?"current":""}><IconButton onClick={()=>handleNavigation('achievements')} ><Stars/></IconButton></li>
                    <li className={navigtaionControl==="forum"?"current":""}><IconButton onClick={()=>handleNavigation('forum')} ><Forum/></IconButton></li>
                    <li className={navigtaionControl==="bookmark"?"current":""}><IconButton onClick={()=>handleNavigation('bookmark')} ><Bookmark/></IconButton></li>
                </ul>
            </div>
            <div className="navbar__TopBar">
                <div className="">
                    <h5>Task Management</h5>
                </div>
                <div className="navbar__Options">
                    <IconButton><Search/></IconButton>
                    <IconButton><NotificationsRounded/></IconButton>
                    <div className="navbar__Avatar" onClick={()=>handleLogoutFun()} >
                        <Avatar src={user_avatar} />
                        <h6>{username}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    username: state.auth.username
})

export default connect(mapStateToProps, { logout })(Navbar)