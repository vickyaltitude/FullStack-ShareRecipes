import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/myrecipe.css'

const MyrecipeHead = () => {
  return (
    <div className='myrecipe'>
         <div className='myrecipesnav'>
            <NavLink style={{color:'whitesmoke'}} className='linknav' to='.'  >My recipes</NavLink>
            <NavLink style={{color:'whitesmoke'}} className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')} to='favourites'  >Favourites</NavLink>
            <NavLink style={{color:'whitesmoke'}} className={({ isActive }) => (isActive ? 'linknav  active-link' : ' linknav')} to='collections' >Collections</NavLink>
      </div>
        <Outlet />
    </div>
  )
}

export default MyrecipeHead