const mongoose =require('mongoose');

const BookSchema=new mongoose.Schema({
title:{
    type:String,
    required:true,
},
isbn:{
    type:String,
    required:true
},
autho:{
    type:String,
    require:true
}



});

module.exports=Book=mongoose.model('book',BookSchema);
