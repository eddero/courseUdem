import GetCourseList from "../../features/Instructors/services/getCourseList";



const InstructorPage = () => {


    return <div>
        <h1>Instructor page</h1>

        <h2>My courses</h2>
        <div>
            <GetCourseList/>
        </div>
    </div>
}

export default InstructorPage