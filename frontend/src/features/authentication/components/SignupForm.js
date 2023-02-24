import FormInput from "../../../components/form/FormInput";
import Button from "../../../components/ui/Button";
import useForm from "../../../hooks/useForm";


const SignupForm = ({ onSubmit }) => {
    const { values, handleChange, handleSubmit, resetForm } = useForm({
        email: '',
        username: '',
        password: '',
    });

    return (
        <form onSubmit={(event) => handleSubmit(event, onSubmit)}>
            <div>
                <FormInput
                    label="Email"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <FormInput
                    label="Username"
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <Button type="submit">Register</Button>
            <Button type="button" onClick={resetForm}>
                Reset
            </Button>
        </form>
    );
}

export default SignupForm;