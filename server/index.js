const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel=require('./models/User')
const Form1Data=require('./models/Formdata')
const dotenv= require("dotenv");
const connectDB =require("./config/db")
dotenv.config();
connectDB()

const PORT = 3001;

const app = express()
app.use (express.json())
app.use(cors())


app.post('/signin',(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(users => {
        if(users) {
        if(users.password === password){
        ids=users._id
        res.json(users)
        } else{
        res.json("the password is incorrect")
        }
        }else{
            res.json("not exist")
        }
    })
});

app.get('/user/:id', async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    } catch (error) {
      res.status(500).send('Server error');
    }
  });

  // app.put('/user/:id',(req,res)=>{
  //   const id=req.params.id;
  //   UserModel.findByIdAndUpdate(id, { phone: req.body.phone }, { new: true })  
  //   .then(users=>{
  //     console.log(res.json(users));
  //     res.json(users)})
  //   .catch(err=>res.json(err))
  // })

app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(users=>{res.json(users)
    })
   .catch(err=>{ console.log(err)
    res.json(err)})
})

app.get('/signin/:id', (req, res) => {
    UserModel.find({})
      .then(users => {
        res.json(users);
        console.log(users);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
      });
  });

// =============form===================

app.post('/cvupdate', (req, res) => {
   Form1Data.Form1Data.create(req.body)
    .then(data1 => res.json(data1))
    .catch(err => res.status(500).json(err));
});
app.post('/cvupdate2', (req, res) => {
  Form1Data.Form2Data.create(req.body)
   .then(data2 => res.json(data2))
   .catch(err => res.status(500).json(err));
});
app.post('/cvupdate3', (req, res) => {
  Form1Data.Form3Data.create(req.body)
   .then(data3 => res.json(data3))
   .catch(err => res.status(500).json(err));
});
app.post('/cvupdate4', (req, res) => {
 Form1Data.Form4Data.create(req.body)
  .then(data4 => res.json(data4))
  .catch(err => res.status(500).json(err));
});
app.post('/cvupdate5', (req, res) => {
  Form1Data.Form5Data.create(req.body)
   .then(data5 => res.json(data5))
   .catch(err => res.status(500).json(err));
});



app.get('/form/:profileid', (req, res) => {
  const { profileid } = req.params; 
  Form1Data.Form1Data.find({ profileid: profileid }) 
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});
app.get('/form2/:profileid', (req, res) => {
  const { profileid } = req.params; 
  Form1Data.Form2Data.find({ profileid: profileid }) 
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});
app.get('/form3/:profileid', (req, res) => {
  const { profileid } = req.params; 
  Form1Data.Form3Data.find({ profileid: profileid }) 
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});
app.get('/form4/:profileid', (req, res) => {
  const { profileid } = req.params; 
  Form1Data.Form4Data.find({ profileid: profileid }) 
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});
app.get('/form5/:profileid', (req, res) => {
  const { profileid } = req.params; 
  Form1Data.Form5Data.find({ profileid: profileid }) 
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});
app.get("/", (req, res) => {
  res.send("<h1>Hello world...</h1>");
});

app.listen(3001, () => {
    console.log(`server is running 3000`);
})