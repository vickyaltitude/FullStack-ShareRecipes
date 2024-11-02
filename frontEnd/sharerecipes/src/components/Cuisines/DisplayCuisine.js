import React from 'react'
import '../styles/cuisine.css'

const DisplayCuisine = ({cuisines}) => {
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
                <h4 style={{color:'#008080'}}>{cuisine.cuisineName} Dish Varities</h4>
                {cuisine.cuisineVarities.length > 0 ?  (

                            <ul className='cuisineVarietyul'>
                            {cuisine.cuisineVarities.map(variety => (
                                <li className='listvarietiescount' key={variety.cName}>
                                    <span>{variety.cName}</span>
                                    <span style={{color:'red'}}>{`(${variety.cCount})`}</span>
                                </li>
                            ))}
                            </ul>

                )  :  (<h2 style={{ color: 'whitesmoke' }}>No dishes available in this cuisine</h2>) }
                
            </li>
        ))}
    </ul>
) : (
    <h2 style={{ color: 'whitesmoke' }}>Nothing to display</h2>
)}
    </div>
  )
}

export default DisplayCuisine