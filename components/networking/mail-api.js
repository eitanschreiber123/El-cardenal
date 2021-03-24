import axios from "axios"
export const sendContactMail=async(senderMail,sendTo,rooms,date,payment,price,people,food,name,number)=>{
    const data={senderMail,sendTo,rooms,date,payment,price,people,food,name,number}
    try{const res=await axios({method:"post",url:"/api/contact",headers:{"Content-Type":"application/json"},data})
        return res
    }catch(error){return error
    }}
