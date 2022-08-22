import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
// useParams so that keyword(cuisine type from URL) can be pulled out for use
import {Link, useParams} from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

const CuisinePage = () => {

    const [cuisine, setCuisine] = useState([]);

    // Takes URL and stores parameters as an object
    let params = useParams();

    // Render page with specified cuisine type
    useEffect(() => {
        getCuisine(params.type);
        // When the food type in the URL changes rerender page
    }, [params.type]);


    // Get specific cuisine type using from an API call, pass through cuisine type desired which will come from URL
    const getCuisine = async (cuisineType) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=12&cuisine=${cuisineType}`);
        const recipes = await data.json();

        setCuisine(recipes.results);
    };


    return (
        <Grid>
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <img src={item.image} alt={item.title}/>
                        <h4>{item.title}</h4>
                    </Card>
                );
            })}
        </Grid>
    );
};


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default CuisinePage;
