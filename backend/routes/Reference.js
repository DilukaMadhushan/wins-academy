const express = require('express');
const References = require('../models/References');

const router = express.Router();

//save

router.post('/reference/save',(req,res)=>{

    let newLecturer = new References(req.body);

    newLecturer.save((err) =>{
        console.log(err)
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"reference saved successfully"
        });
    });

});

//get

router.get('/references',(req,res) =>{
    References.find().exec((err,references) =>{
        if(err){
            return res.status(410).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingReferences:references
        });
    });
});


//get specific 

router.get("/references/:id",(req,res) =>{

    let referenceid = req.params.id;

    References.findById(referenceid,(err,References) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            References
        });
    });

    
});

//update

router.put('/reference/update/:id',(req,res)=>{
    References.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,instructor)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//delete

router.delete('/reference/delete/:id',(req,res) =>{
    References.findByIdAndRemove(req.params.id).exec((err,deleteStudent) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesful",deleteStudent
        });
    });
});


module.exports = router;