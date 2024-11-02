import React from 'react'
import Reciperating from '../Reciperating'

const DisplayRecipeHome = ({homeDisplay}) => {
  return (
    <div className='displayrecipe'>
        {homeDisplay.length > 0 ? (
    <ul className='recipesul'>
        {homeDisplay.map(recipe => (
            <li key={recipe.recipeId}>
                <img alt={recipe.recipeName} src={recipe.recipeTemplate} height='200px' width='260px' />
                <hr/>
                <h4 className='displaytitle'>Recipe Name: {recipe.recipeName}</h4>
                <div ><Reciperating recipeRating={recipe.reciperating} /> </div>
                <p>{recipe.recipeInstruction.length > 50 ? `${recipe.recipeInstruction.slice(0, 32)}...` : recipe.recipeInstruction}</p>
                <p className='displaytitle'>Posted By: {recipe.recipeAuthor}</p>
            </li>
        ))}
    </ul>
) : (
    <h2 style={{ color: 'whitesmoke' }}>Nothing to display</h2>
)}

               
        
        </div>
  )
}

export default DisplayRecipeHome