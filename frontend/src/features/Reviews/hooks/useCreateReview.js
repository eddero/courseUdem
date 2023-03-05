import usePostRequest from "../../../hooks/usePostRequest";

const useCreateReview = ({courseId}) => {
    const userString = localStorage.getItem("authToken2")
    const user = JSON.parse(userString);
    const userId = user.passport.user;

    const {error, isLoading, handlePost} = usePostRequest(`/reviews/${userId}/create/${courseId}`);

    const createReview = async (values) => {
        //handle review creation
        console.log("submit ", values);
        await handlePost(values);
    }
    return {createReview, error, isLoading};
}

export default useCreateReview;