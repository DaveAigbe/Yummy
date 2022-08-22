import Popular from "../Components/Popular";
import Vegetarian from "../Components/Vegetarian";
import React from 'react';
import {motion} from 'framer-motion'


const HomePage = () => {
    return (
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration:0.5}}>
            <Popular/>
            <Vegetarian/>
        </motion.div>
    );
};

export default HomePage;
