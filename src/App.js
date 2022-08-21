import Pages from "./Pages/Pages";
import {BrowserRouter} from "react-router-dom";
import FoodCategories from "./Components/FoodCategories";
import React from "react";

function App() {
    return (
        <div className="App">
            {/*Wrap within browser router so that all pages have access to routing*/}
            <BrowserRouter>
                <h1>Yummy</h1>
                <FoodCategories/>
                <Pages/>
            </BrowserRouter>
        </div>
    );
}

export default App;
