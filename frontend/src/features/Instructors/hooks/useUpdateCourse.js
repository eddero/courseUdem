import usePutRequest from "../../../hooks/usePutRequest";
import {useParams} from "react-router-dom";



const useUpdateCourse = () => {
    const {id} = useParams();
    const {error, isLoading, handlePut} = usePutRequest(`/courses/update/${id}`);

    const updateCourse = async (values) => {
        console.log("submit", values);
        await handlePut(values);
    }
    return {updateCourse, error, isLoading};
}

export default useUpdateCourse;