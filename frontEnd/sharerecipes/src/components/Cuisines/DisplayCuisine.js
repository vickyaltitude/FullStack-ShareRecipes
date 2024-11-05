import React from 'react'
import '../styles/cuisine.css'
import { NavLink, Outlet } from 'react-router-dom'

const DisplayCuisine = ({cuisines,handleFetchVarities}) => {
  return (
    <div className='displaycuisine'>
      {cuisines.length > 0 ? (
    <ul className='cuisineul'>
        {cuisines.map(cuisine => (
            <li key={cuisine.cuisineId}>
                <h2 className='displaytitle'>{`${cuisine.cuisineName}`}</h2>
                <hr/>
                <img alt={cuisine.cuisineName} src={cuisine.cuisineImg} height='200px' width='260px' />
                <hr/>
                <h4 style={{color:'#008080'}}>Dish Varities</h4>
                {cuisine.cuisineVarities.length > 0 ?  (

                            <ul className='cuisineVarietyul'>
                            {cuisine.cuisineVarities.map(variety => (
                              <NavLink 
                              to={`/cuisines/${cuisine.cuisineId}-${variety.cName}`} 

                             
                              className='listvarietiescount' 
                              key={`${cuisine.cuisineId}/${variety.cName}`}
                            >
                              <p>
                                <span>{variety.cName}</span>
                                <span style={{ color: 'red' }}>{`(${variety.cCount})`}</span>
                              </p>
                            </NavLink>
                            ))}
                            </ul>

                )  :  (<h2 style={{ color: 'whitesmoke' }}>No dishes available in this cuisine</h2>) }
                
            </li>
        ))}
    </ul>
) : (
    <h2 style={{ color: 'whitesmoke' }}>Nothing to display</h2>
)}

<Outlet />
    </div>
  )
}

export default DisplayCuisine