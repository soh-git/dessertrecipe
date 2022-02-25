import React, { useEffect, useState } from "react";

const CategoriesDes = () => {
    const [categories, setCategories] = useState([
        ["chocolate", "https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg"],
        ["pie", "https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg"],
        ["pancake", "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"],
        ["apple", "https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg"],
        ["caramel", "https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg"],
        ["cake", "https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg"]
    ]);
    return (
        <div className='CategoriesDes'>
            <h2>All Desserts.</h2>
            <div className="row">
                {categories.map((categorie)=>(
                <div key={categorie[0]+'key'} className="col-md-4 p-1 p-md-3 ">
                    <div className="card "   >
                        <img className="card-img-top" src={categorie[1]} alt={categorie[0]} />
                        <div className="card-body">
                            <h5 className="card-title">{categorie[0]}</h5>
                            <a className="btn btn-outline-secondary" href={"/"+categorie[0]}> Look </a>
                            
                        </div>
                    </div>
                </div> ))}
                
            </div>

        </div>
    );
};

export default CategoriesDes;

