const express = require('express');
const app = express()
const cors= require('cors')
var jwt= require('jsonwebtoken')
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());

const tampil = require('../Backend/users')
const secrit= 'B(@{|j;$OWH7<5nI-=}B@W3J6cbrdy^-V2QzfK20K$IaHsU8/GgviIov(I2VB7<7'
app.post('/todouser',(req, res, next)=>{
    tampil.findOne({
        name: req.body.name
    }).then((err, user) => {
        if(err) {
            res.status(500).send({message:err})
            return;
        }
        if(user){
            res.status(400).send({message:"Username is already in use"})
        } 
        next()
    })
},async(req,res)=>{
    const tp=new tampil({
        name:req.body.name,
        password:jwt.sign({foo : `${req.body.password}`},secrit)});
        try{
            console.log('ya sudah')
            const simpandata= await tp.save();
            res.json({error:null,data:simpandata});
        }catch(err){
            res.status(400).json({err});
        }
    console.log("wadidaw")
})

app.get('/dftruser',async(req, res)=>{
    await tampil.find({},(err,data)=>{
        console.log('yoi')
        res.json(data);
    }).exec();
})
app.delete('/delete/:id',async(req,res)=>{
        await tampil.findByIdAndDelete({_id:req.params.id},(err,data)=>{
            res.json(data);
        })
    })

app.listen(3000,console.log('running'))










// router.post('/todouser',async(req, res)=>{
//     const tpl =new tampil(req.body);
//     try{
//         tpl.save();
//         console.log(tpl)
//     }catch(error) { res.status(500).send(error)}
//     res.end();
// })
// router.get('/todouser',async(req,res)=>{
//     await tampil.find({},(err,data)=>{
//         res.json(data);
//     }).exec();
// })
// router.delete('/delete/:id',async(req,res)=>{
//     await tampil.findByIdAndDelete({_id:req.params.id},(err,data)=>{
//         res.json(data);
//     })
// })


//callback function
// const orderCoffee = callback => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//         callback(coffee);
//     }, 3000);
// }
 
 
// orderCoffee(coffee => {
//     console.log(coffee);
// });


// //promise
// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakerReady = true;
//     if (isCoffeeMakerReady) {
//         resolve("Kopi berhasil dibuat");
//     } else {
//         reject("Mesin kopi tidak bisa digunakan");
//     }
// }
 
 
// const makeCoffee = () => {
//     return new Promise(executorFunction);
// }
// const coffeePromise = makeCoffee();
// console.log(coffeePromise);
