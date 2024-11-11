import React from 'react'
import { NavLink } from 'react-router-dom'
import Reciperating from '../Home/Reciperating'
import '../styles/homedisplay.css'
import { useParams } from 'react-router-dom';

const ShowVarities = ({homeDisplay,cuisines}) => {

    let {id} = useParams();
    let paramInfo = id.split('-')
    let cuisineName;
    console.log(id,homeDisplay,paramInfo,cuisines)
    let recipeIds;
   cuisines.forEach(cuis => {
        
        if(cuis.cuisineId === Number(paramInfo[0])){
            
         cuisineName = cuis.cuisineName
           let gotIds = cuis.cuisineVarities.filter(variety => variety.cName === paramInfo[1])
           recipeIds= gotIds[0].recipeId
           return
        }
        
    
    });

    let recipes = recipeIds.map(recipe => {
      
        return  homeDisplay.filter(recipes =>{
            return recipe === recipes.recipeId
         })
       
       })
       let showRecipes = recipes.flat();
    
      console.log(showRecipes)
  return (
    <div className='homedisplay'>
           <h2>{cuisineName}  {paramInfo[1]}</h2>
        <div className='displayvarietyrecipe'>
         
        {showRecipes.length > 0 ? (
    <ul className='recipesul'>
        {showRecipes.map((recipe) => (
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
        
    </div>
  )
}

export default ShowVarities