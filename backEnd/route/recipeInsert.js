const express = require('express');
const router = express.Router();
const db = require('../models/data');
const jwt = require('jsonwebtoken')

router.post('/',async (req,res)=>{

     let userInfo = req.header('Authorization');
     let userDetails = jwt.verify(userInfo,process.env.JWT_TOKEN_SECRET)
     console.log(userDetails,userInfo)
     console.log(req.body)

     try{

        const [result] = await db.execute(
            `INSERT INTO recipes (
              recipeId,
              recipeName,
              reciperating,
              recipeIngredients,
              recipeInstruction,
              recipeAuthor,
              recipeCuisine,
              recipeTemplate,
              recipeDiet,
              recipeComments
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              req.body.newRecipeObj.recipeId,
              req.body.newRecipeObj.recipeName,
              req.body.newRecipeObj.reciperating,
              JSON.stringify(req.body.newRecipeObj.recipeIngredients),
              JSON.stringify(req.body.newRecipeObj.recipeInstruction),
              userDetails.userName,
              JSON.stringify(req.body.newRecipeObj.recipeCuisine),
              req.body.newRecipeObj.recipeTemplate,
              req.body.newRecipeObj.recipeDiet,
              JSON.stringify(req.body.newRecipeObj.recipeComments)
            ]
          ); 

          res.json({msg:'checking'})

     }catch(err){

           
        res.status(404).json({msg:'error while inserting recipe in db'})
     }

   

     
       
})


module.exports = router;