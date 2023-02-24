import {Link} from "react-router-dom"
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {

    const {isAuthenticated, logout} = useAuthContext();

    const handleLogout = () => {
        logout();
    };
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h2>Home</h2>
                </Link>
                <Link to="/courses">
                    <h2>Courses</h2>
                </Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/instructor">
                            <h2>Instructor</h2>
                        </Link>
                        <button onClick={handleLogout}>
                            <h2>Logout</h2>
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <h2>Log in</h2>
                        </Link>
                        <Link to="/register">
                            <h2>Sign up</h2>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}

export default Navbar