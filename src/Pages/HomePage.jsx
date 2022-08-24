import React from 'react';
import {motion} from 'framer-motion'
import RecipesSlider from "../Components/RecipesSlider";


const HomePage = () => {
    return (
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration:0.5}}>
            <RecipesSlider/>
            <RecipesSlider title='Vegetarian Options' type='vegetarian'/>
            <RecipesSlider title='Vegan Options' type='vegan'/>
        </motion.div>
    );
};

export default HomePage;
