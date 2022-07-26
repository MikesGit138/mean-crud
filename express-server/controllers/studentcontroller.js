const express = require('express')
const router = express.Router()

const {students} = require('../models/student')

router.get('/', (req,res)=>{
    students.find((err, docs)=>{
        if(!err){res.send(docs)}
    })
})

router.post('/', (req,res)=>{
    let newStudent = new students({
        fname : req.body.fname,
        lname : req.body.lname,
        age : req.body.age,
        cohort : req.body.cohort
    }) 
    newStudent.save((err, docs) => {
       if(!err){res.send(docs)}
    })
})

router.delete('/:id', (req,res)=>{
    students.findById(req.params.id)
    students.remove((err, docs) =>{
        if(!err){res.send(docs)}
    })
})

module.exports = router