import {Link} from "react-router-dom";
import useFetch from "../../hooks/useFetch";



const CourseList = () => {

    const {data, error, isLoading} = useFetch("/courses");

    if (isLoading) return <p>Loading courses...</p>;

    if (error) return <p>Error fetching courses</p>;


    return (
        <div>
            <h2>Course List</h2>
            <ul>
                {data && data.map((course) => (
                    <div key={course._id}>
                        <Link to={`/courses/${course._id}`}>{course.title}</Link>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;