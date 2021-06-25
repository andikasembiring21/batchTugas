const express = require('express');
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json());
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/latihan',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected')
},err=>{
    console.log('not connected'+err)
})

const isi = new mongoose.Schema({
    dekripsi:String,
})
module.exports=mongoose.model('tes',isi);