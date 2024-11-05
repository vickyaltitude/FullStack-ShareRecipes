import React from 'react'
import '../styles/authors.css'

const SearchUsers = ({searchUsers,setSearchUsers}) => {
  return (
    <div className='searchusers'>
        
        <input 
        placeholder='search users by name'
        type='text'
        value={searchUsers}
        onChange={(e)=> setSearchUsers(e.target.value)}
        
        />
        
        
        </div>
  )
}

export default SearchUsers