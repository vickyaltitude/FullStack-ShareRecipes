import React from 'react'
import SearchCuisine from './SearchCuisine'
import DisplayCuisine from './DisplayCuisine'
import '../styles/cuisine.css'

const Cuisines = ({cuisines,searchCuisine,setSearchCuisine,handleFetchVarities}) => {
  return (
    <div className='cuisinedisplay'>
      <SearchCuisine searchCuisine={searchCuisine} setSearchCuisine={setSearchCuisine}/>
      <DisplayCuisine cuisines={cuisines}  handleFetchVarities={handleFetchVarities}/>
    </div>
  )
}

export default Cuisines