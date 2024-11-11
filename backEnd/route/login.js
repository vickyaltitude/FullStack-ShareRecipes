const express = require('express');
const router = express.Router();
const generateJWSToken = require('../utilities/jwtAuth');
const db = require('../models/data')
const bcrypt = require('bcrypt')


router.post('/',(req,res)=>{

    const email = req.body.loginEmail;
    const passwrd = req.body.loginPasswrd;

    db.execute('SELECT * FROM users WHERE useremail = ?',[email]).then(resp =>{

        const datafetched = resp[0];

        if(datafetched.length == 0){
            res.status(404).json({msg: 'User Email not found!'})
        }else {

            bcrypt.compare(passwrd.toString(),datafetched[0].password,(err,result)=>{

                if(err){
                    res.status(500).json({msg: 'Something went wrong!!'})
                }
                if(result == true){
                    res.json({msg: 'User login successfull',userAuth: generateJWSToken.encryptuserid(datafetched[0].id,datafetched[0].username)})
                }
                else{
                    res.json({msg: 'password incorrect'})
                }
            })
           
        }
    }).catch(err => console.log(err));

})





module.exports = router