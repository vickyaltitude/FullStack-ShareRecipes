import React from 'react'
import SearchRecipeHome from '../SearchRecipeHome'
import DisplayRecipeHome from './DisplayRecipeHome'
import '../styles/homedisplay.css'

const Home = ({homeDisplay,searchRecipe,setSearchRecipe}) => {
  return (
    <div className='homedisplay'>
         <SearchRecipeHome searchRecipe={searchRecipe} setSearchRecipe={setSearchRecipe} />
         <DisplayRecipeHome homeDisplay={homeDisplay}/>
         
    </div>
  )
}

export default Home