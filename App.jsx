

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ServicePage from './Pages/ServicePage.jsx';
import TeamPage from './Pages/TeamPage.jsx';
import TestimonialPage from './Pages/TestimonialPage.jsx';
import ProjectPage from './Pages/ProjectPage.jsx';
import ByCategoryPage from "./Pages/ByCategoryPage.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/Service"  element={<ServicePage/>}/>
                <Route path="/Project"  element={<ProjectPage/>}/>
                <Route path="/Testimonial"  element={<TestimonialPage/>}/>
                <Route path="/byCategory/:categoryID" element={<ByCategoryPage/>}/>
                <Route path="/Team"  element={<TeamPage/>}/>
                <Route path="/details/:postID" element={<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;