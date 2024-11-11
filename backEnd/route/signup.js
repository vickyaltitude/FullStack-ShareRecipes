const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../models/data');
const bcrypt = require('bcrypt');


router.post('/',(req,res)=>{

    let userInfo = req.body;
    console.log(userInfo);

    bcrypt.hash(userInfo.signinPasswrd,10,(err,hash)=>{
          
        if(err){
            console.log('something went wrong while encrypting user password')
            res.json({msg:'something went wrong while encrypting user password'})
        }
        else{
            db.execute('INSERT INTO users (id,username,useremail,password) VALUES(?,?,?,?)',[userInfo.userId,userInfo.signinName,userInfo.signinEmail,hash]).then(resp =>{

                db.execute('INSERT INTO userdetails (totalRecipeRating,recipeContributed,followedBy,userId) VALUES(?,?,?,?)',[0,0,0,userInfo.userId]).then(resp =>{

                    res.json({msg:'user successfully added to the website'});

                }).catch(err =>{

                    res.json({msg:'error while inserting in db userdetails'})

                })

               


            }).catch(err => {
                 console.log(err)
                 res.json({msg:'error while inserting in db users'})
            })
        }

         
    })

})





module.exports = router