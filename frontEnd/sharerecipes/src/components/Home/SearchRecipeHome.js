import React from 'react'
import '../styles/myrecipe.css'

const SearchRecipeHome = ({searchRecipe,setSearchRecipe}) => {
  return (
    <div className='searchrecipe'>
        
        <form>
            <input
            value={searchRecipe}
            onChange={(e)=> setSearchRecipe(e.target.value)}
            type='text'
            placeholder='search recipe by name'
            
            />
            
        </form>
    </div>
  )
}

export default SearchRecipeHome