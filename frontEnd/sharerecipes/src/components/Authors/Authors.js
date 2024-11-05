import React from 'react'
import ShowAuthors from './ShowAuthors'
import '../styles/authors.css'
import SearchUsers from './SearchUsers'

const Authors = ({users,searchUsers,setSearchUsers}) => {
  return (
    <div className='authors'>

      <SearchUsers searchUsers={searchUsers} setSearchUsers={setSearchUsers} />
      
          {

            users.length > 0 ? <ShowAuthors users={users} /> : <h2 style={{color:'whitesmoke'}}>No users to display</h2>
          }


    </div>
  )
}

export default Authors