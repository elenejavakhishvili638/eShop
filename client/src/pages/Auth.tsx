import Login from "../components/Login"
import { useState } from "react"
import Register from "../components/Register"
import "./Auth.css"
import axios from "axios"
import { UserErrors } from "../errors"
import Modal from "../components/Modal"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router"

const Auth = () => {
    const [user, setUser] = useState({
        name: "",
        password: ""
    })
    const [error, setError] = useState<string>("")
    const [login, setLogin] = useState<boolean>(false)
    const [loggedInUser, setLoggedInUser] = useState({
        name: "",
        password: ""
    })
    const [_, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate()


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUser((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setLoggedInUser((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!login) {
            try {
                await axios.post("http://localhost:3001/user/register", {
                    username: user.name,
                    password: user.password
                })
                setUser({
                    name: "",
                    password: ""
                })
                // alert("Registered")
            } catch (error) {
                if (error.response.data.type === UserErrors.USERNAME_ALREADY_EXISTS) {
                    setError("ERROR: Username already exists")
                } else {
                    setError("ERROR: Something went wrong")
                }
            }
        } else {
            try {
                const response = await axios.post("http://localhost:3001/user/login", {
                    username: loggedInUser.name,
                    password: loggedInUser.password
                })
                setLoggedInUser({
                    name: "",
                    password: ""
                })
                setCookies("access_token", response.data.token)
                localStorage.setItem("userId", response.data.userID)
                navigate("/")
                // alert("Logged in")
            } catch (error) {

                let errorMessage: string = ""
                switch (error.response.data.type) {
                    case UserErrors.NO_USER_FOUND:
                        errorMessage = "User does not exist"
                        break;
                    case UserErrors.WRONG_CREDENTIALS:
                        errorMessage = "Wrong username/password"
                        break;
                    default:
                        errorMessage = "SomeThing went wrong"
                }

                setError(errorMessage)
            }
        }
    }

    const closeModal = () => {
        setError("")
    }

    const changeToLogin = () => {
        setLogin(true)
    }


    const changeToRegister = () => {
        setLogin(false)
    }


    return (
        <div className="auth-main">
            {error && <Modal text={error} closeModal={closeModal} />}
            {login ? (
                <Login name={loggedInUser.name} password={loggedInUser.password} handleChange={handleLogin} handleSubmit={handleSubmit} changeToRegister={changeToRegister} />
            ) : (
                <Register name={user.name} password={user.password} handleChange={handleChange} handleSubmit={handleSubmit} changeToLogin={changeToLogin} />
            )}
        </div>
    )
}

export default Auth