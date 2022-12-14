import React from 'react';
import styled from 'styled-components'
import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate();

    const submitHandler = (e) => {
        // So that page will not automatically refresh when user enters form
        e.preventDefault();

        // Navigate to specific url when user enters form
        navigate('/searched/' + input)
    }


    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch/>
                {/*When the value changes in the textbox, get the value and save it to the current input state*/}
                <input onChange={e => setInput(e.target.value)}
                       type="text"
                       value={input}
                ></input>
            </div>
        </FormStyle>
    );
};


const FormStyle = styled.form`
  margin: 0rem 20rem;
  div {
    position: relative;
    width: 100%;
  }
  input{
    border:none;
    background: #6382B9;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`


export default SearchBar;
