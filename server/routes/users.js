const express = require('express');

const router = express.Router();

const User = require('../models/user');
// list users 
router.get('/', async (req,res)=>{
    const users = await User.findAll();
    
    res.send(users);
}); 

// Create a user 
router.post('/',async (req,res)=>{
// validate the req first 
    const {customernumber,firstname,lastname,username,email,dateOfBirth,password,repeatPassword} = req.body;
    const user = await User.create({
        customernumber,
        firstname,
        lastname,
        username,
        email,
        dateOfBirth,
        password,
        repeatPassword
    });

    res.send(user);

});

// Update a user 
router.put('/:id',async (req,res)=>{
    const {customernumber,firstname,lastname,username,email,dateOfBirth,password,repeatPassword} = req.body;
    console.log(req.params.id);
    const user = await User.findOne({where:{id: req.params.id }})
    const updatedUser = await user.update({
        customernumber,
        firstname,
        lastname,
        username,
        email,
        dateOfBirth,
        password,
        repeatPassword
    });

    res.send(updatedUser);
// also validate the request
// verify existance
})

// Delete a user 
router.delete('/:id', async (req,res)=> {
    // verify existance 
    const user = await User.findOne({where:{id: req.params.id }});
    user.destroy({force:true});
    res.send('user deleted');

});

// search users

module.exports = router;