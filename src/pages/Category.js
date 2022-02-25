import React from 'react';
import { useHistory, useParams } from 'react-router-dom'
import CategoryDes from '../components/CategoryDes';
import Navigation from '../components/Navigation';
import RandomRecipe from '../components/RandomRecipe';


const Category = () => {
    const categories= ["chocolate", "pie", "apple", "caramel","cake", "pancake"];
   const {category}=useParams();
   if (!categories.includes(category)) {
    return (
        <div>
            this category doesn't exist !
        </div>
    )
    
   }
    return (
        <div>
        <Navigation/>
        <div className='container pt-3 mb-3'>
            <div className='row'>
            <div className=' col-md-8 mb-3' >
            <CategoryDes category={category}/>
       
                </div> 
                <div className=' col-md-4 mb-3 align-self-center'>
                  <RandomRecipe/>
                    </div>      
            </div>
           
        </div>

    </div>
     
    );
};

export default Category;