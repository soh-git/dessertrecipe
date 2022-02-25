import React from 'react';

const CardMeal = ({ meal, category, classStyle }) => {
    const { idMeal, strMeal, strMealThumb } = meal;
    return (
        <div key={idMeal + 'key'} className={classStyle}  >
            <div className="card "  >
                <img className="card-img-top" src={strMealThumb} alt={strMeal} />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <a className="btn btn-outline-secondary" href={"/" + category + "/" + idMeal}> Look </a>

                </div>
            </div>
        </div>
    );
};

export default CardMeal;