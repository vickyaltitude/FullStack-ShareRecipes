import React from 'react'
import './styles/sharerecipe.css'
import { PiCookingPotDuotone } from "react-icons/pi";
import { GiCook } from "react-icons/gi";



const ShareRecipes = ({handleRecipeSubmit,newRecipeFormData,setnewRecipeFormData,setShowVaritiesInForm,cuisineV}) => {

  function handleChange(eve){

        const {name,value} = eve.target;

        if(name === 'newRecCuis'){
          setShowVaritiesInForm(value);
        }

        setnewRecipeFormData({
          ...newRecipeFormData,
          [name] : value
        })
      
  }
  
  return (
    <div className='sharerecipe'>

        
       <form className='sharerecipeform' onSubmit={(e)=> handleRecipeSubmit(e)}>
              <p className='sharerecipeF column'>
                <label htmlFor='recipename'>
                 Recipe Name:
                </label>
                <input
                id='recipename'
                 type='text'
                 value={newRecipeFormData.newRecName}
                 onChange={(e)=>handleChange(e)}
                 required
                 name='newRecName'
                 placeholder='recipe name'
                />
              </p>

              <p className='sharerecipeF column'>
                <label htmlFor='ingredients'>
                  Ingredients needed:
                </label>
                <textarea 
                value={newRecipeFormData.newRecIng}
                onChange={(e)=>handleChange(e)}
                id="ingredients" 
                name="newRecIng" 
                rows="4" 
                placeholder="1. &#10;2. &#10;3. &#10;4. &#10;5. &#10;6." 
                required></textarea>

              </p>
              <p className='sharerecipeF column'>
                <label htmlFor='cookinginst'>
                  Cooking instructions:
                </label>
                <textarea 
                value={newRecipeFormData.newRecIns}
                onChange={(e)=>handleChange(e)}
                id="cookinginst" 
                name="newRecIns"
                rows="4" 
                placeholder="1. &#10;2. &#10;3. &#10;4. &#10;5. &#10;6." 
                required></textarea>

              </p>
              <p className='sharerecipeF column'>
                <label htmlFor='cuisine'>
                  Which cuisine
                </label>
                <select 
                value={newRecipeFormData.newRecCuis}
                onChange={(e)=>handleChange(e)}
                id="cuisine" 
                name="newRecCuis" 
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
              <p className='sharerecipeF column'>
                <label htmlFor='cuisinevariety'>
                  Choose variety 
                </label>
                <select 
                value={newRecipeFormData.newRecVaritey}
                onChange={(e)=>handleChange(e)}
                id="cuisinevariety" 
                name="newRecVariety" 
                required>
                    <option value="">--Please choose an option--</option>
                    <option value="General">General</option>
                    {cuisineV ? cuisineV[0].cuisineVarities.map(variety => (

                      <option value={variety.cName}>{variety.cName}</option>
                            

                    )) :   <option value="General">General</option>}
                  
                 
                </select>

              </p>
              <p className='sharerecipeF column'>
                <label htmlFor='diet'>
                  Choose Diet
                </label>
                <select 
                value={newRecipeFormData.newRecDiet}
                onChange={(e)=>handleChange(e)}
                id="diet" 
                name="newRecDiet" 
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

export default ShareRecipes