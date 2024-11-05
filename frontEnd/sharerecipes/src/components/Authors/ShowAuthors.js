import React from 'react'
import '../styles/authors.css'
//userId:8,userName:'jos butler',totalRecipeRating:4.2,recipeContributed:1,followedBy:3
const ShowAuthors = ({users}) => {
  return (
    <div className='showauthors'>
        <ul className='userlistsul'>
            {users.map(user => (

                <li className='userlistsli' key={user.userId}>
                    <p className='usernames'>{user.userName}</p>
                    <p className='userdetails'>
                      <span>Recipe contributed - {user.recipeContributed}</span>|
                       <span>Total rating - {user.totalRecipeRating}</span>|
                      <span>Followed by - {user.followedBy} </span>
                    </p>
                    <p className='socialbuttons'>
                        <button className='followbtn'>Follow</button>
                        <button className='unfollowbtn'>Unfollow</button>
                        <button className='viewcontirubitonbtn'>View contributions</button>
                    </p>
                </li>

            ))}
        </ul>
    </div>
  )
}

export default ShowAuthors