import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [courses, setCourses] = useState(null)
    useEffect(() => {

        axios.get("/courses")
            .then((response) => {setCourses(response.data)})
            .catch(error => console.log(error))

    }, [])

    return (
        <div className="home">
            <h2>Home</h2>
            <div className="courses">
                {courses && courses.map((course) => (
                    <p key={course._id}>{course.title}</p>
                ))}
            </div>
        </div>
    );
};

export default Home;
