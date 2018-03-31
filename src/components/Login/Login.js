import React from 'react'
import PropTypes from 'prop-types'

const Login = props => (
    <div className='login'>
        <h2>Login</h2>
        <button className='gmail' onClick={() => props.authenticate('Gmail')}>
            Login With Gmail
        </button>
    </div>
)

export default Login
