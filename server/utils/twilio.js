import twilio from "twilio";

async function sms(accountSid,accountToken,from,to,body){
    try {
        let sender = twilio(accountSid,accountToken)
        let message = await sender.messages.create({
            from,
            to,
            body
        })
        console.log("sms sent",message.sid);
    } catch (error) {
        console.log(error);
    }
}

export default sms;