import React from 'react'
import SearchCuisine from './SearchCuisine'
import DisplayCuisine from './DisplayCuisine'
import '../styles/cuisine.css'

const Cuisines = ({cuisines,searchCuisine,setSearchCuisine}) => {
  return (
    <div className='cuisinedisplay'>
      <SearchCuisine searchCuisine={searchCuisine} setSearchCuisine={setSearchCuisine}/>
      <DisplayCuisine cuisines={cuisines} />
    </div>
  )
}

export default Cuisines