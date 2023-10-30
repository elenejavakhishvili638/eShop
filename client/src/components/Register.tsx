import React from 'react'
import Input from './Input'
import "./Register.css"

type Props = {}

const Register = (props: Props) => {
    return (
        <div className='register-wrapper'>
            <h3>Register</h3>
            <form className='register-form'>
                <Input label='Name' id='name' type='text' value='' />
                <Input label='Password' id='password' type='password' value='' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register