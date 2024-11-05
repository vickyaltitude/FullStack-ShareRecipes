import React from 'react'
import './styles/sharerecipe.css'
import { PiCookingPotDuotone } from "react-icons/pi";
import { GiCook } from "react-icons/gi";



const ShareRecipes = () => {
  return (
    <div className='sharerecipe'>
        
       <form className='sharerecipeform'>
              <p className='sharerecipeF column'>
                <label htmlFor='recipename'>
                 Recipe Name:
                </label>
                <input
                id='recipename'
                 type='text'
                 required
                 placeholder='recipe name'
                />
              </p>

              <p className='sharerecipeF column'>
                <label htmlFor='ingredients'>
                  Ingredients needed:
                </label>
                <textarea id="ingredients" name="ingredients" rows="4" placeholder="1. &#10;2. &#10;3. &#10;4. &#10;5. &#10;6." required></textarea>

              </p>
              <p className='sharerecipeF column'>
                <label htmlFor='cookinginst'>
                  Cooking instructions:
                </label>
                <textarea id="cookinginst" name="instructions" rows="4" placeholder="1. &#10;2. &#10;3. &#10;4. &#10;5. &#10;6." required></textarea>

              </p>
              <p className='sharerecipeF column'>
                <label htmlFor='cuisine'>
                  Which cuisine
                </label>
                <select id="cuisine" name="cuisine" required>
                    <option value="">--Please choose an option--</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>

              </p>
              <p className='sharerecipeF column'>
                <label htmlFor='cuisinevariety'>
                  Choose variety 
                </label>
                <select id="cuisinevariety" name="cVariety" required>
                    <option value="">--Please choose an option--</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>

              </p>
              <p className='sharerecipeF column'>
                <label htmlFor='diet'>
                  Choose Diet
                </label>
                <select id="diet" name="cdiet" required>
                    <option value="">--Please choose an option--</option>
                    <option value="option1">Veg</option>
                    <option value="option3">Non-veg</option>
                </select>

              </p>
              
              <p className='formButtons'>
                <button className='submitrecipe' type='submit'>Submit recipe</button>
                <button className='resetrecipe' type='reset'>Reset fields</button>
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