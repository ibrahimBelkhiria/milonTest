const express = require('express');

const router = express.Router();
const User = require('../models/user');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
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
});

// get one user 
router.get('/:id',async (req,res)=>{
    const user = await User.findOne({where:{id: req.params.id }});
    console.log('calling get user');
    res.status(200).send(user);
// also validate the request
// verify existance
});

// Delete a user 
router.delete('/:id', async (req,res)=> {
    // verify existance 
    const user = await User.findOne({where:{id: req.params.id }});
    const id = user.id;
    user.destroy({force:true});
    res.send({id});
    
});

// search users
router.post('/search',async (req,res)=>{

  const keyword = req.body.keyword.toLowerCase();
   const users =  await User.findAll({
        where: {
        [Op.or]:[
             { 
            customernumber: { [Op.like]: '%' + keyword + '%' },
             },{
            username: { [Op.like]: '%' + keyword + '%' },
             },
             {
            firstname: { [Op.like]: '%' + keyword + '%' },
            },{
            lastname: { [Op.like]: '%' + keyword + '%' },
            },{
            email: { [Op.like]: '%' + keyword + '%' },
            }
            ]
        }

    });

    res.status(200).send(users);
});





module.exports = router;