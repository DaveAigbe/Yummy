import React from 'react';
import {IoReload} from 'react-icons/io5';
import styled from 'styled-components'


const emptyOutMemory = () => {
    localStorage.clear();
}


const ReloadButton = () => {
    return (
        <Button onClick={() => emptyOutMemory()}>
            <IoReload/>
        </Button>
    );
};


const Button = styled.button`
  cursor: pointer;
`

export default ReloadButton;
