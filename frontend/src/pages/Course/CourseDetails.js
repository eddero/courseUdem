import {Link, useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Button from "../../components/ui/Button";
import usePostRequest from "../../hooks/usePostRequest";


function CourseDetails() {

    const {id} = useParams()

    const {data, error, isLoading} = useFetch(`/courses/${id}`)
    const {handlePost} = usePostRequest();

    if (isLoading) return <p>Loading course detail...</p>

    if (error) return <p>Error fetching course detail</p>


    return (
        <div>
            <div>
                <h1>Course Details</h1>
                {data && <h2>Course Title: {data.title}</h2>}
                {data && <h2>Course Description: {data.description}</h2>}
                {data && <h2>Course Students: {data.students.length}</h2>}
                {data &&  <Link to={`/lessons/${data._id}`}>{data.title}</Link>}
            </div>
            <div>
                <Link to="/confirmEnrollment" state={{ course: data }}>
                    <Button>Enroll here</Button>
                </Link>
            </div>
        </div>

    );
}

export default CourseDetails;