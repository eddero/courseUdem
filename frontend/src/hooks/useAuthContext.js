import { useContext } from "react";
import AuthContext from "../context/AuthContext";


// Custom hook to access the auth context
const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    // Throw an error if the hook is used outside of an AuthProvider
    if (!authContext) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }

    return authContext;
};

export default useAuthContext;