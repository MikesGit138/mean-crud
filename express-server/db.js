const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/MyStudentCrud', (err) =>{
    if(!err){
        console.log('mongodb connected');
    }else{
        console.log('dd connection problems')
    }
})

module.exports = mongoose