import React from 'react'
import '../styles/myrecipe.css'
import { NavLink } from 'react-router-dom'


const Collections = ({collections}) => {
  return (
    <>
    <h2>Collections</h2>
      <div className='collections'>
      {
        collections.length > 0 ? (

           <ul className='collectionsul'>
             {collections.map(collection =>(

                   <NavLink to={`/myrecipes/collections/${collection.collectionId}`} key={collection.collectionId} className='collectionsli'>
                     <p className='collectionname'>{collection.collectionName}</p>
                     <p className='totalrecipes'>{collection.collectionRecipes}</p>
                   </NavLink>

             ))}
           </ul>

        ) : <h2>No contents to display</h2>
      }
    </div>
    </>
  
  )
}

export default Collections