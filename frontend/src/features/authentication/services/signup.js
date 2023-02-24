import SignupForm from "../components/SignupForm";
import useSignup from "../hooks/useSignup";


const Signup = () => {
    const { signup, error, isLoading } = useSignup();

    if (isLoading) return <p>Loading register...</p>;

    if (error) return <p>Error register account</p>;

    return (
        <div>
            <h2>Register</h2>
            <SignupForm onSubmit={signup} />
        </div>
    );
}

export default Signup;