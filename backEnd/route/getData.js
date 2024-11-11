const express = require('express');
const router = express.Router();
const db = require('../models/data');




router.get('/',async (req,res)=>{

      let recipeData = await db.execute('SELECT * FROM recipes');
      let reciCuis = await db.execute('SELECT * FROM recipecuisine');
      let reciComments = await db.execute('SELECT * FROM recipecomments');
      let reciUsers = await db.execute(`SELECT users.id AS userId, 
                        users.username AS userName, 
                        users.useremail AS userEmail, 
                        userdetails.totalRecipeRating AS totalRecipeRating, 
                        userdetails.recipeContributed AS recipeContributed, 
                        userdetails.followedBy AS followedBy 
                        FROM users  RIGHT JOIN userdetails ON users.id = userdetails.userId`);
      let recipes = await db.execute('SELECT * FROM recipes')


      res.json({msg:recipeData[0],reciCuis,reciComments,reciUsers: reciUsers[0],recipes:recipes[0]});
})

module.exports = router;