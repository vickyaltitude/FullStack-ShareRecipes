import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';
import { GiCampCookingPot } from "react-icons/gi";

const Header = () => {
  return (
    <div className='header'>
        <div className='apptitle'>
            <GiCampCookingPot className='cookingicon' />
            <h2>Share-recipe</h2>
        </div>
        <div className='navigation'>
            <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/'
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/cuisines'
            >
                Cuisines
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/sharerecipes'
            >
                Share Recipes
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/authors'
            >
                Authors
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/myrecipes'
            >
                My recipes
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/aboutus'
            >
                About us
            </NavLink>
        </div>
        <div className='login-signup'>
            <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/signup'
            >
                Signup
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/login'
            >
                Login
            </NavLink>
            
        </div>
    </div>
  )
}

export default Header;
