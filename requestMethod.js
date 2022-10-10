import axios from "axios";

const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2JjZjQxYjA4OWUwMDE3OTJlMDFkOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTM5NzQ2OSwiZXhwIjoxNjY1NjU2NjY5fQ.dsmxBOkAQI2Kqr6NjVL0kqZVTXYgnbyP845IamZSidc"
export const publicRequest= axios.create({
    baseURL: BASE_URL,

})
export const userRequest= axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
    
})