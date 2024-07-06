const express = require('express');

const Product = require('../model/productModel');



exports.addProduct = (req,res) =>{
    console.log(req.body)
    Product.create({
        name:req.body.name,
        sort: req.body.sort,
        
    },(err,data) => {
        if(err) return res.status(500).send('Error')
        res.status(200).send("product added")
    })
}

//getAll Product
exports.getProduct = (req,res) => {
    Product.find({},
        (err,data) => {
            if(err) return res.status(500).send('Error')
            res.status(200).send(data)
        })
    
    }

exports.getProductList = (req,res)=>{
        Product.find({},
            (err,data)=>{
                if(err) return res.status(500).send('Error')

            res.status(200).json({data})
            })
}

// router.post('/register',(req,res)=>{
//     console.log(req.body)
//     User.create({
//         name:req.body.name,
//         sort: req.body.sort,
        
//     },(err,user) => {
//         if(err) return res.status(500).send('Error')
//         res.status(200).send("Register Success")
//     })
// })


// router.post("/update",(req,res)=>{
//     var hashpass =  bcrypt.hashSync(req.body.new_pass,8)
//     user_update = {
//         email:req.body.email,
//         old_pass:req.body.old_pass,
//         new_pass:req.body.new_pass
//     }
//     User.findOne({email:req.body.email},(err,data) => {
//         if(err) return res.status(500).send({auth:false, "error":'Error While login'})
//         if(!data) return res.status(500).send({auth:false, "error":'No user Found Register First'})
//         else{
//             const passIsValid = bcrypt.compareSync(req.body.old_pass,data.password)
//             if(!passIsValid) return res.status(500).send({"error":'Invalid Password'})
//             else{
//                 User.updateOne(
//                     {email:req.body.email},
//                     {
//                         $set:{
//                             password:hashpass
//                         }
//                     },(err,result) =>{
//                         if(err) throw err;
//                         res.send('password Updated')
//                     }
//                 )
//             }
//         }
//     })
    
// })
// //register
// // router.post('/register',(req,res)=>{
// //     var hashedpassword = bcrypt.hashSync(req.body.password,8);
// //     User.create({
// //         name:req.body.name,
// //         password:hashedpassword,
// //         email:req.body.emal,
// //         role:req.body.role?req.body.role:'user'
// //     },(err,user) => {
// //         if(err) { res.status(500).send('Error')}
// //         res.status(200).send("Register Success")
// //     })
// // })



// //loginUser
//  router.post('/login',(req,res) => {
//     User.findOne({email:req.body.email},(err,data) => {
//         if(err) return res.status(500).send({auth:false, "error":'Error While login'})
//         if(!data) return res.status(500).send({auth:false, "error":'No user Found Register First'})
//         else{
//             const passIsValid = bcrypt.compareSync(req.body.password,data.password)
//             if(!passIsValid) return res.status(500).send({"error":'Invalid Password'})

//             //here we are generating token
//             //userid,secert,expiretime
//             var token = jwt.sign({id:data._id},config.secert,{expiresIn:86400});
//             res.send({auth:true,token:token})
//         }
//     })
// });

// //profile
// router.get('/userInfo',(req,res) => {
//     var token = req.headers['x-access-token'];
//     if(!token) res.send({auth:false,token:'No Token Provided'})
//     jwt.verify(token,config.secert,(err,data) => {
//         if(err) return res.status(500).send({auth:false, "error":'Invalid Token'})
//         User.findById(data.id,{password:0},(err,result) => {
//             res.send(result)
//         })
//     })
// })




// module.exports = router;