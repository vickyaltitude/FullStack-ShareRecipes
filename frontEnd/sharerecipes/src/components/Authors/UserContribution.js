import React from 'react'
import Reciperating from '../Reciperating'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../styles/homedisplay.css'

const UserContribution = ({homeDisplay}) => {

    let {name} = useParams();

    let contributionRecipes = homeDisplay.filter(recipe => recipe.recipeAuthor.toLowerCase() === name)


  return (
    <div className='homedisplay'>
 <div className='displayrecipe'>
        {contributionRecipes.length > 0 ? (
    <ul className='recipesul'>
        {contributionRecipes.map((recipe) => (
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
    <h2 style={{ color: 'whitesmoke' }}>No contributions yet</h2>
)}

               
        
        </div>
    </div>
   
  )
}

export default UserContribution