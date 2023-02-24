import useFetch from "../../../hooks/useFetch";


const GetCourseList = () => {

    const userId = sessionStorage.getItem('userId');
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
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default GetCourseList;