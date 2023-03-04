import useFetch from "../../../hooks/useFetch";
import Button from "../../../components/ui/Button";
import useDeleteRequest from "../../../hooks/useDeleteRequest";
import  {useEffect} from "react";
import DeleteCourse from "./deleteCourse";
import UpdateCourse from "./updateCourse";
import {Link} from "react-router-dom";


const GetCourseList = () => {

    const userId = sessionStorage.getItem('userId');

    const userString = localStorage.getItem("authToken2")
    const user = JSON.parse(userString);

    const {data, error, isLoading} = useFetch(`/courses/getAll/${userId}`);


    if (isLoading) return <p>Loading courses...</p>

    if (error) return <p>Error fetching courses</p>

    return (
        <div>
            <ul>
                {data && data.map((course) => (
                    <div key={course._id}>
                        <li>
                            <h3>{course.title}</h3>
                            <DeleteCourse courseId={course._id}/>
                            <div>
                                <Link to={`/update/course/${course._id}`}>
                                    <Button type="button" children={course._id}>Update Course</Button>
                                </Link>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default GetCourseList;