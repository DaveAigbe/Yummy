import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// useParams so that keyword(cuisine type from URL) can be pulled out for use
import {Link, useParams} from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

const SearchedPage = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);

    let params = useParams();

    useEffect(() => {
        getSearched(params.searched);
    }, [params.searched]);


    const getSearched = async (searchValue) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=12&query=${searchValue}`)
        const recipes = await data.json();

        setSearchedRecipes(recipes.results);
    };


    return (
        <Grid>
            {searchedRecipes.length > 0 ?
                searchedRecipes.map((recipe) => {
                        return (
                            <Link to={'/recipe/' + recipe.id}>
                                <Card key={recipe.id}>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <h4>{recipe.title}</h4>
                                </Card>
                            </Link>
                        );
                    })
                :
                <H1Styled>Recipe or Ingredient could not be found, please try again!</H1Styled>
            }
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

const H1Styled = styled.h1`
    display:flex;
    text-align: center;
    justify-content: center;
  color: white;
`


export default SearchedPage;
