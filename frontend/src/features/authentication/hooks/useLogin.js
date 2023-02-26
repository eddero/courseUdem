import usePostRequest from "../../../hooks/usePostRequest";
import useAuthContext from "../../../hooks/useAuthContext";


const useLogin = () => {
    const {setIsAuthenticated} = useAuthContext();
    const {data, error, isLoading, handlePost} = usePostRequest("auths/login");

    const login = async (values) => {
        // handle login logic
        const response = await handlePost(values);
        console.log("response is ", response)

        if (response && response.data) {
            const token = response.data.sessionId;
            const sessionToken = response.data.session;

            console.log("token is ", token)
            sessionStorage.setItem("authToken", token);
            localStorage.setItem("authToken", token);
            sessionStorage.setItem("session", response.data.sessionId);


            sessionStorage.setItem("userId", response.data.user._id);

            setIsAuthenticated(true);


        }

    }

    return {data, login, error, isLoading}
}

export default useLogin;