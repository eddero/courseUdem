import useAuthContext from "../hooks/useAuthContext";
import {Navigate} from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const session = sessionStorage.getItem('session');
    const {setIsAuthenticated} = useAuthContext();

    if (!session) setIsAuthenticated(false);

    console.log("Authenticated is ", session)

    return session ? children : <Navigate to="/login" />;
}

export default PrivateRoute;