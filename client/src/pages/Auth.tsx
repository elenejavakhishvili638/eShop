// import Login from "../components/Login"
import { useState } from "react"
import Register from "../components/Register"
import "./Auth.css"
import axios from "axios"
import { UserErrors } from "../errors"
import Modal from "../components/Modal"

const Auth = () => {
    const [user, setUser] = useState({
        name: "",
        password: ""
    })
    const [error, setError] = useState<string>("")


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUser((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // console.log(user)
        try {
            await axios.post("http://localhost:3001/user/register", {
                username: user.name,
                password: user.password
            })
            setUser({
                name: "",
                password: ""
            })
            alert("Registered")
        } catch (error) {
            if (error.response.data.type === UserErrors.USERNAME_ALREADY_EXISTS) {
                setError("ERROR: Username already exists")
            } else {
                setError("ERROR: Something went wrong")
            }
        }
    }

    const closeModal = () => {
        setError("")
    }

    return (
        <div className="auth-main">
            {error && <Modal text={error} closeModal={closeModal} />}
            <Register name={user.name} password={user.password} handleChange={handleChange} handleSubmit={handleSubmit} />
            {/* <Login /> */}
        </div>
    )
}

export default Auth