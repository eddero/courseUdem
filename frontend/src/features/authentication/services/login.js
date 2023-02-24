import LoginForm from "../components/LoginForm";
import useLogin from "../hooks/useLogin";
import {Navigate} from "react-router-dom";


const Login = () => {
    const {data, login, error, isLoading} = useLogin();

    if (isLoading) return <p>Loading login</p>

    if (error) return <p>Error login account</p>

    if (data) {
        return <Navigate to={"/courses"}/>
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={login}/>
        </div>
    )
}

export default Login;