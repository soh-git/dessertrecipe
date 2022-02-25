import React, { useEffect, useState } from 'react';

import axios from "axios";
import CardMeal from './CardMeal';

const RandomRecipe = () => {
    const categories = ["chocolate", "pie", "apple", "caramel", "cake", "pancake"];

    const [data, setData] = useState();
    const random_num = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };
    const category = categories[random_num(0, categories.length - 1)];
    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + category)
            .then((res) => setData(res.data));
    }, []);
    let meal = [];


    data != undefined && (meal = data.meals[random_num(0, categories.length - 1)]);


    return (
        <div className='RandomRecipe '>
            <h2> random dessert recipe </h2>
            <CardMeal meal = {meal} category={category} classStyle={""}/>


        </div>
    );

};

export default RandomRecipe;