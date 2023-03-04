import UpdateCourseForm from "../components/updateCourseForm";
import useUpdateCourse from "../hooks/useUpdateCourse";


const UpdateCourse = () => {

    const { updateCourse, isLoading, error } = useUpdateCourse();

    if (isLoading) return <p>Loading course update</p>

    if (error) return <p>Error course update</p>

    return (
        <div>
            <h2>Update a course</h2>
            <UpdateCourseForm onSubmit={updateCourse}/>
        </div>
    )
}

export default UpdateCourse;