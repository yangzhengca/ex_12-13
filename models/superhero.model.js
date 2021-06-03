const mongoose=require('mongoose');

const superHeroSchema=new mongoose.Schema({
    name:String,
    description:String
});

module.exports=mongoose.model('SuperHeroModel',superHeroSchema);