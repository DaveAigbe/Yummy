import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';

const API_KEY = process.env.REACT_APP_API_KEY;

const SingleRecipePage = () => {
    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    let params = useParams();

    useEffect(() => {
        getRecipe();
    }, [params.id]);

    const getRecipe = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`);
        const recipe = await data.json();

        setRecipe(recipe);
    };

    return (
        <RecipeWrapper>
            <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt=""/>
                <Description>
                    {/*The text is written with elements, so dangerouslySetInnerHTML will format it as normal html*/}
                    <h4 dangerouslySetInnerHTML={{__html: recipe.summary}}></h4>
                </Description>
            </div>
            <Info>
                {/*Add class to Button based of current state*/}
                <Button className={activeTab === 'instructions' ? 'active' : ''}
                        onClick={() => setActiveTab('instructions')}>Instructions
                </Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''}
                        onClick={() => setActiveTab('ingredients')}>Ingredients
                </Button>
                {/*If active tab is instructions, then only display instructions and vice versa*/}
                {activeTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{__html: recipe.instructions}}></h3>
                    </div>
                )}
                {activeTab === 'ingredients' && (
                    <ul>
                        {recipe.extendedIngredients.map(
                            ingredient => <li key={ingredient.id}>{ingredient.original}</li>
                        )}
                    </ul>
                )}
            </Info>
        </RecipeWrapper>
    );
};


const RecipeWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }

  img {
    border-radius: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;

`;

const Description = styled.div`
  width: 556px;
`;


export default SingleRecipePage;
