import React from 'react';
import { useHistory, useParams } from 'react-router-dom'
import Navigation from '../components/Navigation';
import RandomRecipe from '../components/RandomRecipe';
import RecipeDes from '../components/RecipeDes';



const Recipe = () => {
    const param = useParams();
    const categories = ["chocolate", "pie", "apple", "caramel", "cake", "pancake"];
    const { category } = useParams();
    if (!categories.includes(param.category)) {
        return (
            <div>
                this category doesn't exist !
            </div>
        )
    }
    return (
        <div>
            <div>
                <Navigation />
                <div className='container pt-3 mb-3'>
                    <div className='row'>
                        <div className=' col-md-8 mb-3' >
                            <RecipeDes id={param.id} />

                        </div>
                        <div className=' col-md-4 mb-3 align-self-center'>
                            <RandomRecipe />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Recipe;