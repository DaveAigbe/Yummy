import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiAfrica, GiSpain, GiIndianPalace, GiSouthKorea, GiIsland} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import React from 'react';

const CategoriesBar = () => {
    return (
        // styled element that formats container for food categories ui
        <List>
            {/*NavLink will specify that this link redirects to the URL listed*/}
            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice/>
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/American'}>
                <FaHamburger/>
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Thai'}>
                <GiNoodles/>
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/African'}>
                <GiAfrica/>
                <h4>African</h4>
            </SLink>
            <SLink to={'/cuisine/Indian'}>
                <GiIndianPalace/>
                <h4>Indian</h4>
            </SLink>
            <SLink to={'/cuisine/Spanish'}>
                <GiSpain/>
                <h4>Spanish</h4>
            </SLink>
            <SLink to={'/cuisine/Korean'}>
                <GiSouthKorea/>
                <h4>Korean</h4>
            </SLink>
            <SLink to={'/cuisine/Caribbean'}>
                <GiIsland/>
                <h4>Caribbean</h4>
            </SLink>
        </List>
    );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  gap: 10px;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  
  svg {
    color: white;
    font-size: 1.5rem;
  }
  
  &.active {
  background: linear-gradient(to right, #f27121, #e94057);
  svg {
    color: white;
  }
  h4 {
    color: white;
  }

}
  
`

export default CategoriesBar;
