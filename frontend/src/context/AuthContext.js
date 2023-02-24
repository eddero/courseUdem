import React, {createContext, useEffect, useState} from "react";
import usePostRequest from "../hooks/usePostRequest";


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const {handlePost} = usePostRequest("/auths/logout")

    useEffect(() => {
        const tokenSession = sessionStorage.getItem('authToken');
        const tokenLocal = localStorage.getItem('authToken');
        const userId = sessionStorage.getItem('userId');
        if (tokenSession && userId && tokenLocal) {
            setIsAuthenticated(true)

        }
    }, []);

    const logout = async () => {
        try {
            await handlePost();
            setIsAuthenticated(false);
            sessionStorage.clear();
            localStorage.removeItem('authToken');
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};

export default AuthContext;
