import React from 'react'
import { useParams } from 'react-router-dom'
import Reciperating from '../Reciperating';
import '../styles/recipePage.css'

const RecipePage = ({homeDisplay,setFavorite,favorite}) => {

     const {id} = useParams()
     const recipe = homeDisplay.filter(recipe => recipe.recipeId === Number(id));
     let favStr = favorite.length ? favorite.join(',') : '' ;
     console.log(favStr)
     console.log(favStr,recipe[0].recipeId)
     function handleAddFavbtn(ev,recid){
        ev.preventDefault();
         let newFavorite = [...favorite,recid];
         setFavorite(newFavorite);
     }

     function handleRemFavbtn(ev,id){

        ev.preventDefault();

     let newFav = favorite.filter(fav => fav !== Number(id))
     
    setFavorite(newFav)

     }
  return (
    <div className='disrecipe'>
         {recipe.length > 0 ? (
               
                 <div className='recipecontainer'>
                    <div className='topportions'>
                            <img  alt={recipe[0].recipeName} src={recipe[0].recipeTemplate} height='220px' width='100%' />
                            <div className='imgside'>
                                <p>Rating : <Reciperating className='showrecpage' recipeRating={recipe[0].reciperating} /> </p>
                                <p>Author : {recipe[0].recipeAuthor}</p>
                                {!favStr.includes(recipe[0].recipeId.toString()) ? <button onClick={(e)=> handleAddFavbtn(e,recipe[0].recipeId)}>Add favorite</button> : <button onClick={(e)=> handleRemFavbtn(e,recipe[0].recipeId)}>Remove favorite</button>}
                                
                            </div>
                    </div>
                    <div className='bottomportions'>
                        <div className='recipeinfo'>
                            <p>Recipe Name : <span style={{color:'green',fontWeight:'bolder'}}>{recipe[0].recipeName}</span></p>
                            <p>Recipe Cuisine : <span style={{color:'green',fontWeight:'bolder'}}>{recipe[0].recipeCuisine[0].cName}</span></p>
                            <p>Cuisine Dish : <span style={{color:'green',fontWeight:'bolder'}}>{recipe[0].recipeCuisine[1].cVariety}</span></p>
                            <p>Diet : <span style={{color:`${recipe[0].recipeDiet === 'non-veg' ? 'red' : 'green'}`,fontWeight:'bolder'}}>{recipe[0].recipeDiet}</span></p>
                        </div>
                        <div className='instructions'>
                            
                            <div className='recingredients'>
                            <p style={{color:'#ff5722'}}>Ingredients</p>
                            <ul>
                                {recipe[0].recipeIngredients.length > 0 ? (recipe[0].recipeIngredients.map(ing =>(

                                         <li>{ing}</li>

                                ))) : <h4>Nothing to diplay</h4>}
                            </ul>

                            </div>
                            <div className='recinstructions'>
                            <p style={{color:'#ff5722'}}>Cooking instructions</p>
                            <ul>
                                {recipe[0].recipeInstruction.length > 0 ? (recipe[0].recipeInstruction.map(ing =>(

                                         <li>{ing}</li>

                                ))) : <h4>Nothing to diplay</h4>}
                            </ul>

                            </div>
                            <div className='commentform'>
                            <h4>Leave a Comment</h4>
                                <textarea rows="4" placeholder="Your Comment"></textarea>
                                <button>Submit</button>

                            </div>
                            <div className='comments'>
                                                                
                                                            {recipe[0].recipeComments.length > 0 ? (
                                    recipe[0].recipeComments.map((comment) => {
                                        return Object.entries(comment).map(([user]) => (
                                            <li className='commentlists'>
                                                <p>{user} :</p>
                                                <p>  {comment[user]}</p>
                                            
                                            </li>
                                        ));
                                    })
                                ) : (
                                    <h3>No comments yet</h3>
                                )}


                            </div>
                        
                        </div>
                    </div>
                  </div>

         ) : <h2>Nothing to display here</h2>}
    </div>
  )
}

export default RecipePage