import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Link} from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;


const Vegetarian = () => {
    const [vegetarian, setVegetarian] = useState([]);

    // When page renders, call the function that makes an api call
    useEffect(() => {
        return () => {
            getVegetarian();
        };
    }, []);


    const getVegetarian = async () => {
        const check = localStorage.getItem('vegetarian');

        if (check) {
            setVegetarian(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            setVegetarian(() => data.recipes);

            localStorage.setItem('vegetarian', JSON.stringify(data.recipes));

        }

    };


    return (
        <div>
            <Wrapper>
                <h3>Our Vegetarian Picks</h3>
                <Splide options={{perPage: 4, arrows: false, pagination: false, drag: "free", gap: "5rem"}}>
                    {vegetarian.map(recipe => {
                        return (
                            <SplideSlide key={recipe.id}>
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

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
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


export default Vegetarian;
