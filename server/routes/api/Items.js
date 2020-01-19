const express = require('express');
const router  = express.Router();

// item model
const Item =require('../../moduls/Item')

// @route GET api/items
// @desc Get all Items
// @access Public
router.get('/',(req,res)=>{
    Item
    .find()
    .sort({date:-1})
    .then(items =>  res.json(items))
}) 


// @route POST api/items
// @desc create an Item
// @access Public
router.post('/',(req,res)=>{
    const newItem = new Item({
        name:req.body.name
    });

    newItem
    .save()
    .then(savedItem => res.json(savedItem));
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