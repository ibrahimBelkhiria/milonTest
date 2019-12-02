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
    const {customernumber,firstname,lastname,username,email,dateOfBirth,password,repeatPassword} = req.body;
    try {
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
    } catch (error) {
            res.send(error);
    }

});

// Update a user 
router.put('/:id',async (req,res)=>{
    const {customernumber,firstname,lastname,username,email,dateOfBirth,password,repeatPassword} = req.body;
    const user = await User.findOne({where:{id: req.params.id }});
    if(!user) {
        res.status(404).send({error : 'user not found'});
    }else {
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
    }
});

// get one user 
router.get('/:id',async (req,res)=>{
    const user = await User.findOne({where:{id: req.params.id }});
    if(!user) {
        res.status(404).send({error : 'user not found'});
    }else{
        res.status(200).send(user);
    }
   
});

// Delete a user 
router.delete('/:id', async (req,res)=> {
    const user = await User.findOne({where:{id: req.params.id }});
    if(!user) {
        res.status(404).send({error : 'user not found'});
    }else {
        const id = user.id;
        user.destroy({force:true});
        res.send({id});
    }
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