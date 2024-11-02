import React from 'react'
import '../styles/cuisine.css'

const SearchCuisine = ({searchCuisine,setSearchCuisine}) => {
  return (
    <div className='searchcuisine'>
          <form>
            <input
            value={searchCuisine}
            onChange={(e)=> setSearchCuisine(e.target.value)}
            type='text'
            placeholder='search your favorite cuisine'
            
            />
            
        </form>
    </div>
  )
}

export default SearchCuisine