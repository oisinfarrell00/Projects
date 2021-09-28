import React from 'react';
import style from './recipe.module.css';


const recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.h1}>{title}</h1>
            <div>
            <p className={style.calories}>Calories: {Math.round(calories)}</p>
            <img className ={style.image} src={image} alt="didnt work" />
            <p className={style.ingredients}>Ingredients:</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li className={style.ingredients}>{ingredient.text}</li>
                ))}
            </ol>
            </div>
        </div>
        
    );
}

export default recipe;