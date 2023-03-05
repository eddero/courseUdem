import {useLocation} from "react-router-dom";

import Button from "../../components/ui/Button";
import CreateEnrollment from "../../features/Enrollments/services/createEnrollment";

const ConfirmEnrollment = () => {
    const location = useLocation();
    const { course } = location.state;
    const {createEnrollment, error, isLoading} = CreateEnrollment(course._id);

    const enroll = (values) => {
        createEnrollment(values);
    }
    return (
        <div>
            <h2>Confirm enrollment for {course.title}</h2>
            <h2>Confirm enrollment for {course._id}</h2>
            <Button type="button" onClick={() => enroll()}>Confirm</Button>
        </div>
    );
}

export default ConfirmEnrollment;