import React from 'react';
import HomePage from "./HomePage";
import {Route, Routes, useLocation} from 'react-router-dom';
import CategoriesPage from "./CategoriesPage";
import SearchedPage from "./SearchedPage";
import SingleRecipePage from "./SingleRecipePage";
import {AnimatePresence} from 'framer-motion';
// File used to render anything that will be on the homepage so that App.js is not bloated

const AllPages = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/*If the path is empty route to the homepage*/}
                {/*Route declares an element that should be routed to a desired URL path*/}
                <Route path="/" element={<HomePage/>}/>
                {/*:type specifies that it is dynamic text, so any cuisine type can be accepted*/}
                <Route path="/cuisine/:type" element={<CategoriesPage/>}/>
                <Route path="/searched/:searched" element={<SearchedPage/>}/>
                <Route path="/recipe/:id" element={<SingleRecipePage/>}/>
            </Routes>
        </AnimatePresence>

    );
};

export default AllPages;
