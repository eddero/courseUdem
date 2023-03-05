import usePostRequest from "../../../hooks/usePostRequest";


const CreateEnrollment = (courseId) => {
    const userString = localStorage.getItem("authToken2")
    const user = JSON.parse(userString);
    const userId = user.passport.user;

    const {error, isLoading, handlePost} = usePostRequest(`/enrollments/${userId}/create/${courseId}`);

    const createEnrollment = async (values) => {
        console.log("submit", values)
        await handlePost(values);
    }
    return {createEnrollment, error, isLoading};
}

export default CreateEnrollment;