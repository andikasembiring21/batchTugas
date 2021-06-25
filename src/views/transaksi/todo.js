const express = require('express');
const app = express()
const cors= require('cors')
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());

const tampil = require('../backend/database')
app.post('/todo',async(req, res)=>{
    const tpl =new tampil(req.body);
    try{
        tpl.save();
        res.json(tpl);
        console.log(tpl)
    }catch(error) { res.status(500).send(error)}
})
app.get('/todo',async(req,res)=>{
    await tampil.find({},(err,data)=>{
        res.json(data);
    });
})
app.delete('/delete/:id',async(req,res)=>{
    await tampil.findByIdAndDelete({_id:req.params.id},(err,data)=>{
        res.json(data);
    })
})
app.listen(3000,console.log('running'))