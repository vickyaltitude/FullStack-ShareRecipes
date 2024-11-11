import React from 'react'
import Reciperating from '../Reciperating'
import { NavLink } from 'react-router-dom'
import '../styles/homedisplay.css'

const DisplayRecipeHome = ({homeDisplay}) => {
  return (
    <div className='displayrecipe'>
        {homeDisplay.length > 0 ? (
    <ul className='recipesul'>
        {homeDisplay.map((recipe) => (
            <NavLink to={`/home/${recipe.recipeId}`} className='recipesli' key={recipe.recipeId}>
                <img alt={recipe.recipeName} src={recipe.recipeTemplate} height='220px' width='100%' />
                <hr/>
                <h4 className='displaytitle'>Recipe Name: {recipe.recipeName}</h4>
                <div ><Reciperating recipeRating={recipe.reciperating} /> </div>
                <p>{recipe.recipeInstruction[0].length > 50 ? `${recipe.recipeInstruction[0].slice(0, 32)}...` : recipe.recipeInstruction[0]}</p>
                <p>{`${recipe.recipeCuisine[0].cName} Cuisine`}</p>
                <p className='displaytitle'>Posted By: {recipe.recipeAuthor}</p>
            </NavLink>
        ))}
    </ul>
) : (
    <h2 style={{ color: 'whitesmoke' }}>Nothing to display</h2>
)}

               
        
        </div>
  )
}

export default DisplayRecipeHome