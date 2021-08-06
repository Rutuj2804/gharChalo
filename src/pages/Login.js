import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import "./Login.scss"

const Login = ({ login }) => {

    const [ formData, setFormData ] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData

    const handleChange = e =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        login(username);
    }

    return (
        <div className="login__Wrapper" >
            <div className="login__LoginTitles mb-5">
                <h1>Welcome</h1>
                <p>Login to continue...</p>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="login__InputDiv" >
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={e=>handleChange(e)}
                        required
                        autoComplete="off"
                        autoFocus
                    />
                    <label>Username</label>
                </div>
                <div className="login__InputDiv" >
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={e=>handleChange(e)}
                        required
                        autoComplete="off"
                    />
                    <label>Password</label>
                </div>
                <Button type="submit">Login</Button>
            </form>
        </div>
    )
}


export default connect(null, { login })(Login)