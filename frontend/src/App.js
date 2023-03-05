import {BrowserRouter, Routes, Route} from "react-router-dom"


// pages & components
import Home from "./pages/Home/Home"
import Navbar from "./layouts/Navbar"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import CourseList from "./pages/Course/CourseList"
import CourseDetails from "./pages/Course/CourseDetails"
import LessonLists from "./pages/Lesson/LessonList"
import {AuthProvider} from "./context/AuthContext";
import PrivateRoute from "./Routes/PrivateRoute";
import Instructor from "./pages/Instructor/Instructor";
import CreateCourse from "./features/Instructors/services/createCourse";
import UpdateCourse from "./features/Instructors/services/updateCourse";
import EnrollmentPage from "./pages/Enrollment/EnrollmentPage";
import ConfirmEnrollment from "./pages/Enrollment/ConfirmEnrollment";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <Navbar/>
                    <div className="pages">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Signup/>}/>
                            <Route path="/courses">
                                <Route index element={<CourseList/>}/>
                                <Route path=":id" element={<CourseDetails/>}/>
                            </Route>
                            <Route path='/'>}
                                <Route path="/lessons/:id" element={
                                    <PrivateRoute>
                                        <LessonLists/>
                                    </PrivateRoute>}>
                                </Route>
                            </Route>
                            <Route path='/'>}
                                <Route path="/instructor" element={
                                    <PrivateRoute>
                                        <Instructor/>
                                    </PrivateRoute>}>
                                </Route>
                            </Route>
                            <Route path="/create" element={
                                <PrivateRoute>
                                    <CreateCourse/>
                                </PrivateRoute>}>
                            </Route>
                            <Route path="/update/course/:id" element={
                                <PrivateRoute>
                                    <UpdateCourse/>
                                </PrivateRoute>}>
                            </Route>
                            <Route path="/enrollment" element ={
                                <PrivateRoute>
                                    <EnrollmentPage/>
                                </PrivateRoute>}>
                            </Route>
                            <Route path="/confirmEnrollment" element ={
                                <PrivateRoute>
                                    <ConfirmEnrollment/>
                                </PrivateRoute>}>
                            </Route>
                        </Routes>
                    </div>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
