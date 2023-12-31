import Input from './Input'
import "./Register.css"

type Props = {
    name: string,
    password: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    changeToLogin: () => void
}

const Register = ({ name, password, handleChange, handleSubmit, changeToLogin }: Props) => {
    return (
        <div className='register-wrapper'>
            <h3>Register</h3>
            <form className='register-form' onSubmit={(e) => handleSubmit(e)}>
                <Input label='Name' id='name' type='text' value={name} handleChange={handleChange} name="name" />
                <Input label='Password' id='password' type='password' value={password} handleChange={handleChange} name="password" />
                <button type='submit'>Submit</button>
            </form>
            <p>Already have an account? <span onClick={changeToLogin}>Login</span> </p>
        </div>
    )
}

export default Register