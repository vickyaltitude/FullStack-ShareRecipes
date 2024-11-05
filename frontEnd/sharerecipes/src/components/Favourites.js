import React from 'react'
import Reciperating from './Home/Reciperating'
import './styles/myrecipe.css'
import { NavLink } from 'react-router-dom'

const Favourites = ({favorite,homeDisplay}) => {
 
       
  let recipes = favorite.map(recipe => {
      
    return  homeDisplay.filter(recipes =>{
        return recipe === recipes.recipeId
     })
   
   })
   let showRecipes = recipes.flat();
  
  return (
   <>
   <h2>Favorites</h2>
    <div className='favorites'>
        
    {showRecipes.length > 0 ? (
    <ul className='recipesul'>
        {showRecipes.map((recipe) => (
            <NavLink to={`/home/${recipe.recipeId}`} className='recipesli' key={recipe.recipeId}>
                <img alt={recipe.recipeName} src={recipe.recipeTemplate} height='100%' width='100%' />
                <hr/>
                <h4 className='displaytitle'>Recipe Name: {recipe.recipeName}</h4>
                <div ><Reciperating recipeRating={recipe.reciperating} /> </div>
                <p>{recipe.recipeInstruction[0].length > 50 ? `${recipe.recipeInstruction[0].slice(0, 32)}...` : recipe.recipeInstruction[0]}</p>
                <p>{`${recipe.recipeCuisine[0].cName} Cuisine`}</p>
                <p className='displaytitle'>Posted By: {recipe.recipeAuthor}</p>
                <button className='removefromfav'>Remove from favorite</button>
            </NavLink>
        ))}
    </ul>
) : (
    <h2 style={{ color: 'whitesmoke' }}>Nothing to display</h2>
)}


    </div>
   </>
   

  )
}

export default Favourites