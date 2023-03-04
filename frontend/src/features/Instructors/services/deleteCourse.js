import Button from "../../../components/ui/Button";
import useDeleteRequest from "../../../hooks/useDeleteRequest";
import {useEffect} from "react";

const DeleteCourse = ({courseId}) => {
    const {handleDelete} = useDeleteRequest(`/courses/delete/${courseId}`);

    useEffect(() => {

    }, [handleDelete])
    return (
        <Button type="button" onClick={() => {handleDelete()}}>Delete course</Button>
    )

}

export default DeleteCourse;