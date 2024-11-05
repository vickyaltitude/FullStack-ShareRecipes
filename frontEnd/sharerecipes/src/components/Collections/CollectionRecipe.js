import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Reciperating from '../Home/Reciperating';
import '../styles/myrecipe.css'


const CollectionRecipe = ({homeDisplay,collections}) => {
    const {id} = useParams()
    let showR = collections.filter(collection => collection.collectionId === Number(id));
    console.log(showR)
    let recipesArr = showR[0].recipes;
    console.log(recipesArr)
    let recipes = recipesArr.map(recipe => {
      
        return  homeDisplay.filter(recipes =>{
            return recipe === recipes.recipeId
         })
       
       })
       let showRecipes = recipes.flat();
    
      console.log(showRecipes)
  return (
    <>
    <h2>Collections</h2>
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

export default CollectionRecipe