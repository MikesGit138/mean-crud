const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/MyStudentCrud'

mongoose.connect(url, (err) =>{
    if(!err){
        console.log('mongodb connected');
    }else{
        console.log('dd connection problems')
    }
})

module.exports = mongoose