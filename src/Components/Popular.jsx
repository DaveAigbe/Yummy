import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'
const API_KEY = process.env.REACT_APP_API_KEY;


const Popular = () => {
    const [popular, setPopular] = useState([]);

    // When page renders, call the function that makes an api call
    useEffect(() => {
        return () => {
            getPopular();
        };
    }, []);


    const getPopular = async () => {
        // Current value for local storage (Even if empty)
        const check = localStorage.getItem('popular')

        // If the storage is not empty, set the recipes displayed to what is in the local storage
        // This is so that the website will not fetch repeatedly
        if (check) {
            // String to an array, because localStorage only stores strings
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`);
            const data = await api.json();
            setPopular(() => data.recipes);

            // Array to string
            localStorage.setItem('popular', JSON.stringify(data.recipes))

        }


    };


    return (
        <div>
            <Wrapper>
                <h3>Trending</h3>
                {/*Creates the slide*/}
                <Splide options={{perPage: 4, arrows: false, pagination: false, drag: "free", gap: "5rem"}}>
                    {popular.map(recipe => {
                        return (
                            // Each part of the object will be a slider on the slide
                            <SplideSlide key={recipe.id}>
                                {/* Each part of an object needs a unique key*/}
                                <Link to={'/recipe/' + recipe.id}>
                                    <Card>
                                        <Gradient>
                                            <p><strong>{recipe.title}</strong></p>
                                            <img src={recipe.image} alt={`${recipe.title}`}/>
                                        </Gradient>
                                    </Card>
                                </Link>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>

        </div>
    );
};


// STYLES COMPONENTS

// 'styled' allows you to create custom styled elements, that can be used as normal elements(with some styles added)
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  // Applies to anything with the img tag
  img {
    width: 100%;
    height: 100%;
    left: 0;
    border-radius: 2rem;
    position: absolute;
    object-fit: cover;

  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

`;

export default Popular;
