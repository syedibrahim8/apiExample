import mailer from "nodemailer";

async function mail(from,pass,to,subject,text){
    try {
        let userDetails = mailer.createTransport({
            service:"gmail",
            auth:{
                user:from,
                pass,
            }
        })
        let sender = await userDetails.sendMail({
            from,
            to,
            subject,
            text
        })
        console.log("email sent",sender.messageId);
    } catch (error) {
        console.log(error);
    }
}
export default mail; 