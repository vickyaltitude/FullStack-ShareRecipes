import {React,useEffect}from 'react'
import '../styles/sharerecipe.css'
import { PiCookingPotDuotone } from "react-icons/pi";
import { GiCook } from "react-icons/gi";
import { useParams } from 'react-router-dom';

const EditRecipe = ({handleEditRecipeSubmit,editRecipeFormData,setEditRecipeFormData,setShowEditVInForm,homeDisplay, cuisineEditV}) => {

 const {id} = useParams();
 

  function handleEditChange(ev){
      
       let {name,value} = ev.target;

       if(name === 'editRecCuis'){
        setShowEditVInForm(value);
      }
      setEditRecipeFormData({
        ...editRecipeFormData,
        [name] : value
      })

  }

  
 
    useEffect(() => {
        console.log(id)
       
        let editRecipeArr = homeDisplay.filter(recipe => recipe.recipeId === Number(id));
    
    
        if (editRecipeArr.length > 0) {
          const recipe = editRecipeArr[0];
    
        
          const ingFormattedString = recipe.recipeIngredients.map((item, index) => `${index + 1}. ${item}`).join('\n');
          const insFormattedString = recipe.recipeInstruction.map((item, index) => `${index + 1}. ${item}`).join('\n');
    
          setShowEditVInForm(recipe.recipeCuisine[0].cName)
          setEditRecipeFormData({
            editRecName: recipe.recipeName,
            editRecIng: ingFormattedString,
            editRecIns: insFormattedString,
            editRecCuis: recipe.recipeCuisine[0].cName,
            editRecVariety: recipe.recipeCuisine[1].cVariety,
            editRecDiet: recipe.recipeDiet
          });
        }
      }, [id,setEditRecipeFormData]); 
 

  return (
    <div className='editrecipeDis'>
        
             
       <form className='editrecipeform' onSubmit={(e)=> handleEditRecipeSubmit(e,id)}>
              <p className='editrecipeF column'>
                <label htmlFor='recipename'>
                 Recipe Name:
                </label>
                <input
                id='recipename'
                 type='text'
                 value={editRecipeFormData.editRecName || ''}
                 onChange={(e)=>handleEditChange(e)}
                 required
                 name='editRecName'
                 placeholder='recipe name'
                />
              </p>

              <p className='editrecipeF column'>
                <label htmlFor='ingredients'>
                  Ingredients needed:
                </label>
                <textarea 
                value={editRecipeFormData.editRecIng || ''}
                onChange={(e)=>handleEditChange(e)}
                id="ingredients" 
                name="editRecIng" 
                rows="4" 
                placeholder="1. &#10;2. &#10;3. &#10;4. &#10;5. &#10;6." 
                required></textarea>

              </p>
              <p className='editrecipeF column'>
                <label htmlFor='cookinginst'>
                  Cooking instructions:
                </label>
                <textarea 
                value={editRecipeFormData.editRecIns || ''}
                onChange={(e)=>handleEditChange(e)}
                id="cookinginst" 
                name="editRecIns"
                rows="4" 
                placeholder="1. &#10;2. &#10;3. &#10;4. &#10;5. &#10;6." 
                required></textarea>

              </p>
              <p className='editrecipeF column'>
                <label htmlFor='cuisine'>
                  Which cuisine
                </label>
                <select 
                value={editRecipeFormData.editRecCuis || ''}
                onChange={(e)=>handleEditChange(e)}
                id="cuisine" 
                name="editRecCuis" 
                required>
                    <option value="">--Please choose an option--</option>
                    <option value="Indian">Indian</option>
                    <option value="Argentinian">Argentinian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Chinese">Chinese</option>
                    <option value="German">German</option>
                </select>

              </p>
              <p className='editrecipeF column'>
                <label htmlFor='cuisinevariety'>
                  Choose variety 
                </label>
                <select 
                value={editRecipeFormData.editRecVariety || ''}
                onChange={(e)=>handleEditChange(e)}
                id="cuisinevariety" 
                name="editRecVariety" 
                required>
                    <option value="">--Please choose an option--</option>
                    <option value="General">General</option>
                    {cuisineEditV ? cuisineEditV[0].cuisineVarities.map(variety => (

                      <option value={variety.cName}>{variety.cName}</option>
                            

                    )) :   ''}
                  
                 
                </select>

              </p>
              <p className='editrecipeF column'>
                <label htmlFor='diet'>
                  Choose Diet
                </label>
                <select 
                value={editRecipeFormData.editRecDiet || ''}
                onChange={(e)=>handleEditChange(e)}
                id="diet" 
                name="editRecDiet" 
                required>
                    <option value="">--Please choose an option--</option>
                    <option value="Veg">Veg</option>
                    <option value="Non-veg">Non-veg</option>
                </select>

              </p>
              
              <p className='formButtons'>
                <button className='submitrecipe' type='submit'>Submit recipe</button>
              </p>
              
            <p className='cookstyle'>
              <PiCookingPotDuotone className='cookingvessel' />
              <p>Let bro cook   <GiCook style={{fontSize:'1.8rem'}} /></p>
             
            </p>
            
       </form>
        
    </div>
  )
}

export default EditRecipe