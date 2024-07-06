const express = require('express');

const cors =require('cors');

const { MongoClient } = require('mongodb'); 
const app = express();
app.use(cors())
app.use(express.json())
async function mongoConnect() {
    let client = new MongoClient('mongodb+srv://anshif:nesRoWgW5SqAD0yF@cluster0.8dtglzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await client.connect();
    db = client.db('test');
   ;
 }
 
 app.get('/users', async function (req, res) {
     let output = await db.collection('user').find({}).toArray();
     res.json(output);
 });
 
 
 
 



app.post('/calculate', function (req, res) {
    let num1 = req.body.n1;
    let num2 = req.body.n2;
    let opporator = req.body.operator;
    let result;
    console.log(req.body);

    if(opporator == 'add') {
     result = num1 + num2;
    } else if(opporator == 'sub') {
        result = num1 - num2;
    }else if(opporator == 'mul') {
        result = num1 * num2;
    } else if(opporator == 'div') {
        result = num1 / num2;
    }
    res.json(result);
});

app.listen(2000, function() {
    mongoConnect()
console.log('server listening on port 2000');
})