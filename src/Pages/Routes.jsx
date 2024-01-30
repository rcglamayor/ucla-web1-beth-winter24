import { Routes, Route, HashRouter } from 'react-router-dom';

// global styles
import '@/Common/css/normalize.css';
import '@/Common/css/global.scss';

// layout
import PagesLayout from '@/Common/PagesLayout/PagesLayout';

// page components
import Home from './Home';
import Staff from './Staff';
import Contact from './Contact';

// course work page components
import CourseWorkLayout from './CourseWork/CourseWorkLayout.jsx';
import SunAndMoon from './CourseWork/SunAndMoon/SunAndMoon.jsx';
import Essays from './CourseWork/Essays';
import ResponsiveDesign from './CourseWork/ResponsiveDesign';

const MyRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={<PagesLayout />}>
                    <Route element={<Home />} path="" />
                    <Route element={<Staff />} path="staff" />
                    <Route element={<Contact />} path="contact" />

                    <Route element={<CourseWorkLayout />} path="course-work">
                        <Route element={<Essays />} path="" />
                        <Route element={<SunAndMoon />} path="sun-and-moon" />
                        <Route
                            element={<ResponsiveDesign />}
                            path="responsive"
                        />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default MyRoutes;
