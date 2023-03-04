import GetCourseList from "../../features/Instructors/services/getCourseList";
import Button from "../../components/ui/Button";
import {Link} from "react-router-dom";



const InstructorPage = () => {


    return <div>
        <h1>Instructor page</h1>

        <h2>My courses</h2>
        <div>
            <Link to="/create">
                <Button>Create course</Button>
            </Link>
        </div>
        <div>
            <GetCourseList/>
        </div>
    </div>
}

export default InstructorPage