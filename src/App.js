import AllPages from "./Pages/AllPages";
import {BrowserRouter} from "react-router-dom";
import FoodCategories from "./Components/FoodCategories";
import React from "react";
import Search from "./Components/Search";

function App() {
    return (
        <div className="App">
            {/*Wrap within browser router so that all pages have access to routing*/}
            <BrowserRouter>
                <h1>Yummy</h1>
                <Search/>
                <FoodCategories/>
                <AllPages/>
            </BrowserRouter>
        </div>
    );
}

export default App;
