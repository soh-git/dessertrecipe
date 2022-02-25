import React, { useEffect, useState } from 'react';

import axios from "axios";
const RecipeDes = ({ id }) => {
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className='RecipeDes'>
            <div className="row">
                {data != undefined && data.meals.map((meal) => (
                    <div key={meal.idMeal + 'key'} className="P-1 p-md-3 ">
                        
                        <div className="card "   >
                            <div className='row'>
                                <div className='col-md-6 align-self-center '>
                                    <img className="img-fluid" src={meal.strMealThumb} alt={meal.strMeal} />

                                </div>
                                <div className='col-md-6 p-md-3'>
                                    <h5 className="card-title pe-1 ">{meal.strMeal}</h5>
                                    <p className='pe-1 '>{meal.strInstructions}</p>

                                </div>
                            </div>


                        </div>
                    </div>))}

            </div>


        </div>
    );
};

export default RecipeDes;