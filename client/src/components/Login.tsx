import Input from './Input'
import "./Register.css"

type Props = {
    name: string,
    password: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    changeToRegister: () => void
}

const Login = ({ name, password, handleChange, handleSubmit, changeToRegister }: Props) => {
    return (
        <div className='register-wrapper'>
            <h3>Login</h3>
            <form className='register-form' onSubmit={(e) => handleSubmit(e)}>
                <Input label='Name' id='loggedInName' type='text' value={name} handleChange={handleChange} name="name" />
                <Input label='Password' id='loggedInPassword' type='password' value={password} handleChange={handleChange} name="password" />
                <button type='submit'>Submit</button>
            </form>
            <p>Don't have an account? <span onClick={changeToRegister} >Register</span></p>
        </div>
    )
}

export default Login