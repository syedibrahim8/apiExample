import express from "express";
import dotenv from "dotenv";
import e from "express";
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json());

app.post("/add",(req,res)=>{
    try {
        let num1 = req.body.a;
        let num2 = req.body.b;
        let total = num1 + num2
        res.status(200).json({msg:`Sum of ${num1} and ${num2} is: ${total}`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.post("/multiply",(req,res)=>{
    try {
        let num1 = req.body.a;
        let num2 = req.body.b;
        let total = num1 * num2;
        res.status(200).json({msg:`Multiplication of ${num1} and ${num2} is: ${total}`})    
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.post("/compare",(req,res)=>{
    try {
        let num1 = req.body.a;
        let num2 = req.body.b;
        if(num1 > num2){
            return res.status(200).json({msg:`${num1} is greater than ${num2}`})
        }else if(num2 > num1){
            return res.status(200).json({msg:`${num2} is greater than ${num1}`})
        }
        res.status(200).json({msg:`Both ${num1} and ${num2} are equal`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error}) 
    }
})

app.post("/reverse",(req,res)=>{
    try {
        let input = req.body.string;
        let output = input.split('').reverse().join('')
        res.status(200).json({msg:`Reverse order of your string is ${output}`})    
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.post("/palindrome",(req,res)=>{
    try {
        let input = req.body.string;
        let output = input.toLowerCase().split('').reverse().join('')
        if(input != output){
            res.status(200).json({msg:`The given string is not a palindrome`})
        }
        res.status(200).json({msg:`The given string is palindrome`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.post("/vowels",(req,res)=>{
    try {
        let input = req.body.string;
        let vowel = ["a","A","e","E","i","I","O","o","U","u"]
        let count = 0; 
        for(let x of input){
            if(vowel.includes(x)){
                count++
            }
        }
        res.status(200).json({msg:`The number of vowels in a string are ${count}`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.post("/eligible",(req,res)=>{
    try {
        let input = req.body.age;
        if(input < 18){
            res.status(200).json({msg:"You are under age"})
        }
        res.status(200).json({msg:"You are eligible"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})



app.listen(port,()=>{
    console.clear();
    console.log(`munni badnam hui at http://localost:${port}`);
})