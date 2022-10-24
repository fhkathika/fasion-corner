import axios from "axios";

const BASE_URL="http://localhost:5000/api/"
 
        let test = localStorage.getItem("persist:root")
        let test2=JSON.parse(test)
        const user_token=test2?.currentUser;
       const TOKEN=JSON.parse(user_token).accessToken
        console.log(TOKEN);
       
    

    // if (TOKEN) {
    //   let user_token = JSON.parse(TOKEN);
    //   console.log("found",user_token.currentUser.accessToken);
   
    // }
    // else{
    //     console.log("token not found");  
    // }
 
export const publicRequest= axios.create({
    baseURL: BASE_URL,

})
export const userRequest= axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
    
})