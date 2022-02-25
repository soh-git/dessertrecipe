import React from 'react';
import CategoriesDes from '../components/CategoriesDes';
import Navigation from '../components/Navigation';
import RandomRecipe from '../components/RandomRecipe';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <div className='container pt-3 mb-3'>
                <div className='row'>
                <div className=' col-md-8 mb-3' >
                  <CategoriesDes/>   
                    </div> 
                    <div className=' col-md-4 mb-3 align-self-center'>
                  <RandomRecipe/>
                    </div>   
                </div>
               
            </div>

        </div>
    );
};

export default Home;