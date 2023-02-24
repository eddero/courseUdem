import useForm from "../../../hooks/useForm";
import FormInput from "../../../components/form/FormInput";
import Button from "../../../components/ui/Button";


const LoginForm = ({onSubmit}) => {
    const {values, handleChange, handleSubmit, resetForm} = useForm({
        username: "",
        password: ""
    })

    return (
        <form onSubmit={(event) => handleSubmit(event, onSubmit)}>
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
            <Button type="submit">Login</Button>
            <Button type="button" onClick={resetForm}>
                Reset
            </Button>
        </form>
    );

}

export default LoginForm;