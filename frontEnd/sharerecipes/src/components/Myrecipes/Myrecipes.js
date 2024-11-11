import {React} from 'react'
import Reciperating from '../Home/Reciperating'
import { NavLink,useNavigate } from 'react-router-dom'
import '../styles/homedisplay.css'



const Myrecipes = ({myRecipes,homeDisplay}) => {

    let navigate = useNavigate();

    function handleEdit(eve,recipeId){
        eve.preventDefault();
       
        navigate(`/editrecipe/${recipeId}`)
    }
      
  let recipes = myRecipes.map(recipe => {
      
    return  homeDisplay.filter(recipes =>{
        return recipe === recipes.recipeId
     })
   
   })
   let showRecipes = recipes.flat();

  console.log(showRecipes)

  return (

    <>
    <h2>My recipe</h2>
    <div className='displayrecipe'>
      
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
                <button className='editrecipe' onClick={(e)=> handleEdit(e,recipe.recipeId)}>Edit</button>
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

export default Myrecipes