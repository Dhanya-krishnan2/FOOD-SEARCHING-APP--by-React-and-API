import React, {useState} from 'react'


const Recipes = ({recipe}) => {    
    // we need to destructure the information from the api and access that information
    //  using array destructuring to make the code neater easier
    const{label, image,url, ingredients} = recipe.recipe

    return (
        <div className="recipe-box">
            <h2>{label}</h2> 
            <div className="ingredients">{ingredients}</div>
            <h3>{image}</h3>
            <h5>{url}</h5>
            
        </div>
    )
}

export default Recipes
