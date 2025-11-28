import express from "express";
import mail from "./utils/mail.js";
import sms from "./utils/twilio.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT
const app = express();
app.use(express.json())

app.post("/emailsender",async (req,res)=>{
    try {
        let {from,pass,to,subject,text} = req.body
        await mail(from,pass,to,subject,text)
        res.status(200).json({msg:"Email sent"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.post("/sms",async (req,res)=>{
    try {
        let {accountSid,accountToken,from,to,body} = req.body;
        await sms(accountSid,accountToken,from,to,body);
        res.status(200).json({msg:"Sms sent"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})       
    }
})
app.listen(port,()=>{
    console.log(`Server is alive at http://localhost/${port}`);
})