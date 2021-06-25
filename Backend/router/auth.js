// const db=require('../views/backend/users')

// export default{
// function(req, res,next){
//     const usernama= req.headers.name
//     const password= req.headers.password
//     const cek= db.findOne({"nama":`${usernama}`})
//     if(usernama != cek){
//      next();
//     }
//     else{
//         res.send(401);
//     }
//     console.log("masuk pak eko")
//   }
// }

// var jwt= require('jsonwebtoken');
// var njwt = require('njwt')

// // var isi={foo:'andika sembiring'};

// var token=jwt.sign({foo: 'andika sembiring'},'34A43AD');

// console.log(token)

// console.log(njwt.verify(token,'34A43AD','HS256'));

// njwt.verify(token,'34A43AD','HS256',(err,verify) =>{
//     if(err)
//         console.log(err)
//     else
//         console.log(verify)
// })
// console.log("sukses")
// const db=require('../views/backend/users')

// module.exports=function(req, res, next){
//     console.log("bangsad")
// }

// middleware'
// export default{
//     validate: (req, res,next) =>{
//         if(!req.body.name || req.body.name.length < 3){
//             return res.name(400).send({message:"Please input usernama with min 3 chars"})
//         }
//         if(!req.body.password || req.body.password.length < 5){
//             return res.name(400).send({message:"Please input password with min 5 chars"})
//         }
//         next();
//     }   
// }

//cek new or old email
// import db from '../views/backend/users'
// const db=require('../views/backend')
// const user = db.users;
// export default (req,res,next) => {
//     user.findOne({
//         name: req.body.name
//     }).exec((err, user) => {
//         if(err) {
//             res.status(500).send({message:err})
//             return;
//         }
//         if(user){
//             res.status(400).send({message:"Username is already in use"})
//         }   
//         next()
//     })
// }


// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const db= require('../views/backend/users')

// router.post("/tugas4",async((req, res, next)=>{
//     try{
//         let data =await db.users.findOne({"nama" : req.params.nama})
//     }
//     catch (err) {
//         console.log(err);
//         res.status(400).json({message: "Some error occured",err});
//     }
// }))
// module.exports =router;

const express = require('express');
const app = express()
const cors= require('cors')
const WebSocket = require('ws')
const http = require('http')
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());

const server= http.createServer(app);
const wss = new WebSocket.Server({noServer: true});

wss.on('connection',function connection(ws){
    ws.on('message',function incoming(data){
        wss.clients.forEach(function each(client){
            if(client !== ws && client.readyState == WebSocket.OPEN){
                client.send(data);
            }
        })
    })
})

server.on('upgrade',function(req,socket,head){
    wss.handleUpgrade(req,socket,head,function (ws){
        wss.emit('connection',ws,req);
    })
})

server.listen(3030,function(){
    console.log("running")
})