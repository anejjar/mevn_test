const express = require('express');
const router  = express.Router();

// item model
const User =require('../../moduls/User')

// @route GET api/items
// @desc Get all Items
// @access Public
router.get('/',(req,res)=>{
    res.send('ccc');
    // Item
    // .find()
    // .sort({date:-1})
    // .then(items =>  res.json(items))
    // console.log()
}) 


// @route POST api/user/register
// @desc create an Item
// @access Public
router.post('/register', (req,res)=>{
    
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });

    newUser
    .save()
    .then(savedUser => res.json(savedUser))
    .catch(err=>res.json(err));
}) 



// @route DELETE api/items/:id
// @desc Delete an Item
// @access Public
router.delete('/:id',(req,res)=>{
    Item.findById(req.body.id)
    .then(item => item.remove()
                      .then(()  => res.json({message:'that item is gone',success:true}))
                      .catch(() => res.json({message:'not deleted',success:false}))
    )
    .catch(err=>res.status(404).json(err))
}) 


//export

module.exports = router;