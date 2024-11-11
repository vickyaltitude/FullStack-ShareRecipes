import {React ,useEffect}from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';
import { GiCampCookingPot } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    let recipeUser = localStorage.getItem('recipeuser');

  function handleNavLinkClick(eve,route){
    
    
    if (!recipeUser && (route === '/sharerecipes' || route === '/authors')) {
      eve.preventDefault(); 
      navigate('/signup');   
    }
  }

  function handleLogout(){

    localStorage.setItem('recipeuser','');
    navigate('/login');   
  }
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
                onClick={(event) => handleNavLinkClick(event, '/sharerecipes')}
               
            >
                Share Recipes
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/authors'
                 onClick={(event) => handleNavLinkClick(event, '/authors')}
            >
                Authors
            </NavLink>

            {!recipeUser ? '' : <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/myrecipes'
            >
                My recipes
            </NavLink>}
            
            <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/aboutus'
            >
                About us
            </NavLink>
        </div>
        <div className='login-signup'>
            {recipeUser ?  (<button
                className='logoutbtn'
                onClick={() => handleLogout()}
            >
                Logout
            </button>) : <div><NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/signup'
            >
                Signup
            </NavLink>
            /
            <NavLink
                className={({ isActive }) => (isActive ? 'linknav active-link' : 'linknav')}
                to='/login'
            >
                Login
            </NavLink></div> }
            
            
        </div>
    </div>
  )
}

export default Header;
