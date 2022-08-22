import React from 'react';
import HomePage from "./HomePage";
import {Route, Routes} from 'react-router-dom';
import CuisinePage from "./CuisinePage";
import SearchedPage from "./SearchedPage";
// File used to render anything that will be on the homepage so that App.js is not bloated

const AllPages = () => {
    return (
        <Routes>
            {/*If the path is empty route to the homepage*/}
            {/*Route declares an element that should be routed to a desired URL path*/}
            <Route path="/" element={<HomePage/>}/>
            {/*:type specifies that it is dynamic text, so any cuisine type can be accepted*/}
            <Route path="/cuisine/:type" element={<CuisinePage/>}/>
            <Route path="/searched/:searched" element={<SearchedPage/>}/>
        </Routes>
    );
};

export default AllPages;
