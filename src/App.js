import AllPages from "./Pages/AllPages";
import {BrowserRouter, Link} from "react-router-dom";
import CategoriesBar from "./Components/CategoriesBar";
import React from "react";
import SearchBar from "./Components/SearchBar";
import styled from 'styled-components';
import {GiKnifeFork} from "react-icons/gi";


function App() {
    return (
        <div className="App">
            {/*Wrap within browser router so that all pages have access to routing*/}
            <BrowserRouter>
                <Nav>
                    <GiKnifeFork/>
                    <Logo to={'/'}>Yummy</Logo>
                </Nav>
                <Slogan>
                    <p><em>Explore your new favorite dish seamlessly!</em></p>
                </Slogan>
                <SearchBar/>
                <CategoriesBar/>
                <AllPages/>
            </BrowserRouter>
        </div>
    );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  font-weight: 600;
  color: #8DC48D;
  font-family: "Ink Free", serif;
`;

const Nav = styled.div`
  padding: 2rem 0rem 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const Slogan = styled.div`
  padding: 0rem 0rem 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`


export default App;
