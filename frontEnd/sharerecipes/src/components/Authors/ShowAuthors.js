import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/authors.css'
//userId:8,userName:'jos butler',totalRecipeRating:4.2,recipeContributed:1,followedBy:3
const ShowAuthors = ({users,manageFollows,setManageFollows}) => {

    let navigate = useNavigate();

  function handleFollow(ev,uName){
    
    let follwingArr = manageFollows[0].following;
    let newF = [...follwingArr,uName.toLowerCase()]
      let newFollowing = [{...manageFollows[0],following: newF}]
      setManageFollows(newFollowing)
  }
  
  function handleUnfollow(ev,uName){

    let unfollowArr = manageFollows[0].following;
    let newFo = unfollowArr.filter(user => user !== uName.toLowerCase());

 let newFollowing = [{...manageFollows[0],following: newFo}]
      setManageFollows(newFollowing)
  }
  

  function handleViewContribution(ev,uName){
          let converted = uName.toLowerCase();
          navigate(`/usercontribution/${converted}`)


  }

  useEffect(()=>{
   console.log(manageFollows)
  },[manageFollows])

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
                    {manageFollows[0].following.indexOf(user.userName.toLowerCase()) >= 0 ? (
                                    <>
                                      <button className='unfollowbtn' onClick={(e)=> handleUnfollow(e,user.userName)}>Unfollow</button>
                                      <button className='viewcontirubitonbtn' onClick={(e)=> handleViewContribution(e,user.userName)}>View contributions</button>
                                    </>
                                  ) : (
                                    <button className='followbtn' onClick={(e)=> handleFollow(e,user.userName)}>Follow</button>
                                  )}

                    </p>
                </li>

            ))}
        </ul>
    </div>
  )
}

export default ShowAuthors