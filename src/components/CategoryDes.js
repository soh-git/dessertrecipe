import React, { useEffect, useState } from 'react';

import axios from "axios";
import CardMeal from './CardMeal';

const CategoryDes = ({ category }) => {
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + category)
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className='CategoryDes'>
            <h2>All {category} Desserts.</h2>
            <div className="row">
                {data != undefined && data.meals.map((meal) => (
                     <CardMeal meal = {meal} category={category} classStyle={"col-md-4 p-1 p-md-3"}/>
))}

            </div>

        </div>
    );
};
export default CategoryDes;