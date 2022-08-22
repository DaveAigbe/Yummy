import AllPages from "./Pages/AllPages";
import {BrowserRouter, Link} from "react-router-dom";
import CategoriesBar from "./Components/CategoriesBar";
import React from "react";
import SearchBar from "./Components/SearchBar";
import styled from 'styled-components';
import {GiKnifeFork} from "react-icons/gi";
import ReloadButton from "./Components/ReloadButton";

function App() {
    return (
        <div className="App">
            {/*Wrap within browser router so that all pages have access to routing*/}
            <BrowserRouter>
                <Nav>
                    <GiKnifeFork/>
                    <Logo to={'/'}>Yummy</Logo>
                </Nav>
                <SearchBar/>
                <ReloadButton/>
                <CategoriesBar/>
                <AllPages/>
            </BrowserRouter>
        </div>
    );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;


export default App;
