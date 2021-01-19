import axios from "axios"
export const sendOtherMail = async (senderMail, name, origin, affair, message) => {
    const data = {senderMail, name, origin, affair, message}
    try {
        const res = await axios({method:"post",url:"/api/other",headers:{"Content-Type":"application/json"},data})
        return res
    } catch (error) {
        return error
    }}
