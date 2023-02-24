import useAuthContext from "../hooks/useAuthContext";
import {Navigate} from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuthContext();
    console.log("Authenticated is ",isAuthenticated)

    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;